import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* Hero / Sobre mí */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-avatar-wrap">
            <Image
              src="/avatar.png"
              alt="Alfonso"
              width={140}
              height={140}
              className="hero-avatar"
              priority
            />
          </div>
          <h1 className="hero-title">Hola, soy Alfonso Silvas</h1>
          <p className="hero-role">Desarrollador web</p>
          <p className="hero-bio">
            Transformo visiones en soluciones digitales completas y operativas. Mi enfoque abarca el desarrollo profesional de e-commerce, landing pages, sitios web con IA y la creación de sistemas personalizados para automatización, gestión de inventarios y bases de datos.
          </p>
          <p className="hero-cta">
            ¿Listo para convertir su idea en realidad? Hablemos de cómo puedo potenciar su negocio con una solución web estratégica.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/526623501632"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="mailto:alfonsos@revtech.dev"
              className="btn btn-primary"
            >
              Contactar
            </a>
            <a
              href="/luis-alfonso-silvas-cv-2026.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver CV
            </a>
          </div>
        </div>
      </header>

      {/* Proyectos */}
      <section className="projects" aria-labelledby="projects-heading">
        <div className="projects-inner">
          <h2 id="projects-heading" className="projects-title">
            Mis Proyectos
          </h2>
          <p className="projects-subtitle">
            Algunos sitios que he desarrollado. Haz clic en cualquier tarjeta para visitar.
          </p>
          <ul className="projects-grid">
            {projects.map((project) => (
              <li key={project.url}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tecnologías de punta */}
      <section className="tech" aria-labelledby="tech-heading">
        <div className="tech-inner">
          <h2 id="tech-heading" className="tech-title">
            Tecnologías de punta
          </h2>
          <p className="tech-subtitle">
            Trabajamos con un stack actualizado al máximo: el mismo ecosistema que exige el mercado para construir soluciones rápidas, escalables y fáciles de mantener.
          </p>
          <div className="tech-tags">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="tech-tag">Next.js</a>
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="tech-tag">Node.js</a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="tech-tag">React</a>
            <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="tech-tag">TypeScript</a>
            <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="tech-tag">Firebase</a>
            <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noopener noreferrer" className="tech-tag">Firestore</a>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="tech-tag">Vercel</a>
            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="tech-tag">Python</a>
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="tech-tag">Stripe</a>
            <a href="https://www.mercadopago.com.mx" target="_blank" rel="noopener noreferrer" className="tech-tag">Mercado Pago</a>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-tagline">
            <span>¿Quieres tu propia página web?</span>
            <br />
            <span className="footer-tagline-green">Escríbeme y la hacemos desde cero.</span>
          </p>
          <a
            href="mailto:alfonsos@revtech.dev"
            className="btn btn-footer"
          >
            alfonsos@revtech.dev
          </a>
          <p className="footer-copy">© 2026 Todos Los Derechos Reservados.</p>
        </div>
      </footer>
    </>
  );
}
