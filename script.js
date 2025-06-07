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

// Tour images (to be replaced with actual images later)
const tourImages = [
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    'https://images.unsplash.com/photo-1615529162924-f8605388463a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
];

let currentTourImageIndex = 0;

// Property click event (show space animation)
mapButtons.forEach(button => {
    button.addEventListener('click', function() {
        const propertyCard = this.closest('.property-card');
        const houseImage = propertyCard.getAttribute('data-house-img');
        
        // Show space animation
        spaceAnimation.classList.add('active');
        
        // After animation completes, show house preview
        setTimeout(() => {
            spaceAnimation.classList.remove('active');
            housePreviewImage.src = houseImage;
            housePreview.classList.add('active');
            
            // Show door area after image loads
            setTimeout(() => {
                doorArea.style.opacity = '1';
            }, 500);
        }, 3500);
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