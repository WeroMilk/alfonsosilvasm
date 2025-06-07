// DOM Elements
const propertyCards = document.querySelectorAll('.property-card');
const spaceAnimation = document.querySelector('.space-animation');
const housePreview = document.querySelector('.house-preview');
const housePreviewImage = document.querySelector('.house-preview-image');
const closePreview = document.querySelector('.close-preview');
const doorArea = document.querySelector('.door-area');
const virtualTour = document.querySelector('.virtual-tour');
const tourImage = document.querySelector('.tour-image');
const exitTour = document.querySelector('.exit-tour');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const mapButtons = document.querySelectorAll('.btn-map');

// Tour images
const tourImages = [
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    'https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
];

let currentTourImageIndex = 0;

// ===== NUEVA ANIMACIÓN CON THREE.JS =====
function crearEstrellas(cantidad) {
    const vertices = [];
    for (let i = 0; i < cantidad; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);
        vertices.push(x, y, z);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        sizeAttenuation: false
    });
    
    return new THREE.Points(geometry, material);
}

function crearTierra() {
    const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        specular: new THREE.Color(0x333333),
        shininess: 5
    });
    
    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 32, 32),
        material
    );
    
    // Atmósfera
    const atmosfera = new THREE.Mesh(
        new THREE.SphereGeometry(1.52, 32, 32),
        new THREE.MeshPhongMaterial({
            color: 0x3399ff,
            transparent: true,
            opacity: 0.2
        })
    );
    
    const grupo = new THREE.Group();
    grupo.add(earth);
    grupo.add(atmosfera);
    
    return grupo;
}

async function faseEspacial(container, coords) {
    return new Promise((resolve) => {
        // Configuración inicial de Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Crear estrellas
        const stars = crearEstrellas(5000);
        scene.add(stars);
        
        // Crear Tierra
        const tierra = crearTierra();
        scene.add(tierra);
        
        // Luz ambiental
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        // Luz direccional (sol)
        const sunLight = new THREE.DirectionalLight(0xffffff, 1);
        sunLight.position.set(5, 3, 5);
        scene.add(sunLight);
        
        // Posición inicial cámara
        camera.position.z = 100;
        
        // Animación
        let velocidad = 0.05;
        const animar = () => {
            requestAnimationFrame(animar);
            
            // Rotar la Tierra
            tierra.rotation.y += 0.002;
            
            // Mover cámara hacia la Tierra
            if(camera.position.z > 2) {
                camera.position.z -= velocidad;
                velocidad *= 1.03; // Aceleración progresiva
            } 
            // Al acercarse, rotar hacia coordenadas
            else {
                // Cálculos para posicionar sobre coordenadas
                const phi = (90 - coords.lat) * Math.PI / 180;
                const theta = (coords.lng + 180) * Math.PI / 180;
                
                const x = -1.5 * Math.sin(phi) * Math.cos(theta);
                const y = 1.5 * Math.cos(phi);
                const z = 1.5 * Math.sin(phi) * Math.sin(theta);
                
                camera.lookAt(new THREE.Vector3(x, y, z));
                
                // Movimiento suave hacia la ubicación
                const targetPosition = new THREE.Vector3(x*3, y*3, z*3);
                camera.position.lerp(targetPosition, 0.1);
            }
            
            renderer.render(scene, camera);
        };
        
        animar();
        
        // Terminar fase después de 4s
        setTimeout(resolve, 4000);
    });
}

function mostrarVistaMapa(container, coords) {
    // API Key de Google Maps (¡REEMPLAZA CON TU PROPIA KEY!)
    const apiKey = 'TU_API_KEY_DE_GOOGLE_MAPS';
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${coords.lat},${coords.lng}&zoom=17&size=${window.innerWidth}x${window.innerHeight}&maptype=satellite&key=${apiKey}`;
    
    container.innerHTML = `<img src="${url}" style="width:100%; height:100%; object-fit:cover;">`;
}

async function iniciarAnimacion(coords, propertyCard) {
    // Mostrar contenedor de animación
    spaceAnimation.classList.add('active');
    
    // 1. Fase espacial
    await faseEspacial(spaceAnimation, coords);
    
    // 2. Mostrar vista de mapa
    mostrarVistaMapa(spaceAnimation, coords);
    
    // 3. Después de 3 segundos, mostrar la vista previa de la casa
    setTimeout(() => {
        spaceAnimation.classList.remove('active');
        
        const houseImage = propertyCard.getAttribute('data-house-img');
        housePreviewImage.src = houseImage;
        housePreview.classList.add('active');
        
        // Mostrar door area después de cargar la imagen
        setTimeout(() => {
            doorArea.style.opacity = '1';
        }, 500);
    }, 3000);
}

// ===== FIN DE LA NUEVA ANIMACIÓN =====

// Property click event (show space animation)
mapButtons.forEach(button => {
    button.addEventListener('click', function() {
        const propertyCard = this.closest('.property-card');
        const coordsString = propertyCard.getAttribute('data-coords');
        const [lat, lng] = coordsString.split(',').map(Number);
        const coords = { lat, lng };
        
        iniciarAnimacion(coords, propertyCard);
    });
});

// Close preview
closePreview.addEventListener('click', function() {
    housePreview.classList.remove('active');
    doorArea.style.opacity = '0';
});

// Door click event (start virtual tour)
doorArea.addEventListener('click', function() {
    housePreview.classList.remove('active');
    tourImage.src = tourImages[0];
    currentTourImageIndex = 0;
    virtualTour.classList.add('active');
});

// Exit virtual tour
exitTour.addEventListener('click', function() {
    virtualTour.classList.remove('active');
});

// Tour navigation
prevBtn.addEventListener('click', function() {
    currentTourImageIndex = (currentTourImageIndex - 1 + tourImages.length) % tourImages.length;
    tourImage.src = tourImages[currentTourImageIndex];
    tourImage.animate([{opacity: 0}, {opacity: 1}], {duration: 500});
});

nextBtn.addEventListener('click', function() {
    currentTourImageIndex = (currentTourImageIndex + 1) % tourImages.length;
    tourImage.src = tourImages[currentTourImageIndex];
    tourImage.animate([{opacity: 0}, {opacity: 1}], {duration: 500});
});

// Card hover effect
propertyCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add subtle animation to section title
document.querySelector('.section-title').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.section-title').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});