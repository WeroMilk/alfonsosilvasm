"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const projectsWithTranslations = projects.map((project, i) => ({
    ...project,
    name: t.projects.list[i].name,
    description: t.projects.list[i].description,
  }));

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-avatar-wrap">
            <Image
              src="/avatar.png"
              alt="Diego"
              width={140}
              height={140}
              className="hero-avatar"
              priority
            />
          </div>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-bio">{t.hero.bio}</p>
          <p className="hero-cta">{t.hero.cta}</p>
          <div className="hero-actions">
            <a
              href="https://wa.me/526621829724"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.contact}
            </a>
            <a
              href="/cv-diego-silvas-2026.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.viewCv}
            </a>
            <a
              href="/15461088-C1.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.professionalId}
            </a>
          </div>
        </div>
      </header>

      <section className="projects" aria-labelledby="projects-heading">
        <div className="projects-inner">
          <h2 id="projects-heading" className="projects-title">
            {t.projects.heading}
          </h2>
          <p className="projects-subtitle">
            {t.projects.subtitle}
          </p>
          <ul className="projects-grid">
            {projectsWithTranslations.map((project) => (
              <li key={project.url}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tech" aria-labelledby="tech-heading">
        <div className="tech-inner">
          <h2 id="tech-heading" className="tech-title">
            {t.tech.heading}
          </h2>
          <p className="tech-subtitle">
            {t.tech.subtitle}
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

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-tagline">
            <span>{t.footer.tagline1}</span>
            <br />
            <span className="footer-tagline-green">{t.footer.tagline2}</span>
          </p>
          <a
            href="mailto:diegoasm88@gmail.com"
            className="btn btn-footer"
          >
            {t.footer.email}
          </a>
          <p className="footer-copy">{t.footer.copy}</p>
        </div>
      </footer>
    </>
  );
}
