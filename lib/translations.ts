export type Locale = "es" | "en";

export const translations = {
  es: {
    hero: {
      title: "Hola, soy Diego Silvas",
      role: "Ing. en Sistemas Computacionales",
      bio: "Transformo visiones en soluciones digitales completas y operativas. Mi enfoque abarca el desarrollo profesional de e-commerce, landing pages, sitios web con IA y la creación de sistemas personalizados para automatización, gestión de inventarios y bases de datos.",
      cta: "¿Listo para convertir su idea en realidad? Hablemos de cómo puedo potenciar su negocio con una solución web estratégica.",
      whatsapp: "WhatsApp",
      contact: "Contactar",
      viewCv: "Ver CV",
      professionalId: "Cédula Profesional",
    },
    projects: {
      heading: "Mis Proyectos",
      subtitle: "Algunos sitios que he desarrollado. Haz clic en cualquier tarjeta para visitar.",
      list: [
        { name: "SM Perfumes Árabes", description: "E-commerce de perfumes árabes con catálogo, carrito y pasarela de pago." },
        { name: "Rev Tech", description: "Sitio corporativo y portafolio de desarrollo." },
        { name: "Califacil", description: "Plataforma para calificaciones y feedback en tiempo real." },
        { name: "Mi Barra", description: "App para gestión de bar e inventario de bebidas." },
        { name: "FRX Cotizador", description: "Cotizador ATM para operaciones financieras con interfaz moderna." },
        { name: "Avatar Lega AI", description: "Herramienta con IA para generar Documentos Legales con validez legal 100% en México." },
        { name: "SecZipGrade", description: "Página web, complemento para la APP ZipGrade, para la Secretaría de Educación y Cultura en Sonora." },
        { name: "Superzonax", description: "Sistema de supervisión de zona: asistencia diaria, reportes trimestrales, eventos y evidencias." },
      ],
    },
    tech: {
      heading: "Tecnologías de punta",
      subtitle: "Trabajo con un stack actualizado al máximo: el mismo ecosistema que exige el mercado para construir soluciones rápidas, escalables y fáciles de mantener.",
    },
    footer: {
      tagline1: "¿Quieres tu propia página web?",
      tagline2: "Escríbeme y la hacemos desde cero.",
      email: "diegoasm88@gmail.com",
      copy: "© 2026 Todos Los Derechos Reservados.",
    },
  },
  en: {
    hero: {
      title: "Hi, I'm Diego Silvas",
      role: "Computer Systems Engineer",
      bio: "I turn visions into complete, production-ready digital solutions. My work covers professional development of e-commerce, landing pages, AI-powered websites, and custom systems for automation, inventory management, and databases.",
      cta: "Ready to turn your idea into reality? Let's talk about how I can help your business with a strategic web solution.",
      whatsapp: "WhatsApp",
      contact: "Contact",
      viewCv: "View CV",
      professionalId: "Professional License",
    },
    projects: {
      heading: "My Projects",
      subtitle: "Some sites I've built. Click any card to visit.",
      list: [
        { name: "SM Perfumes Árabes", description: "E-commerce for Arabic perfumes with catalog, cart, and payment gateway." },
        { name: "Rev Tech", description: "Corporate site and development portfolio." },
        { name: "Califacil", description: "Platform for ratings and real-time feedback." },
        { name: "Mi Barra", description: "App for bar management and beverage inventory." },
        { name: "FRX Cotizador", description: "ATM-style quote tool for financial operations with a modern interface." },
        { name: "Avatar Lega AI", description: "AI-powered tool to generate legally valid legal documents in Mexico." },
        { name: "SecZipGrade", description: "Web companion for the ZipGrade app, for the Ministry of Education and Culture in Sonora." },
        { name: "Superzonax", description: "Zone supervision system: daily attendance, quarterly reports, events, and evidence." },
      ],
    },
    tech: {
      heading: "Cutting-Edge Technologies",
      subtitle: "I work with a fully up-to-date stack: the same ecosystem the market demands to build fast, scalable, and maintainable solutions.",
    },
    footer: {
      tagline1: "Want your own website?",
      tagline2: "Get in touch and we'll build it from scratch.",
      email: "diegoasm88@gmail.com",
      copy: "© 2026 All Rights Reserved.",
    },
  },
} as const;
