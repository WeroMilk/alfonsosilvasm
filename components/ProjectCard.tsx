"use client";

import Image from "next/image";
import type { projects } from "@/data/projects";

type Project = (typeof projects)[number];

function getHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-thumb-wrap">
        <Image
          src={project.image}
          alt=""
          width={400}
          height={250}
          className="project-card-thumb"
          unoptimized
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling;
            if (fallback instanceof HTMLElement) fallback.hidden = false;
          }}
        />
        <div className="project-card-thumb-fallback" hidden aria-hidden>
          <span>↗</span>
        </div>
      </div>
      <div className="project-card-body">
        <span className="project-card-name">{project.name}</span>
        <span className="project-card-desc">{project.description}</span>
        <span className="project-card-url">{getHostname(project.url)}</span>
      </div>
    </a>
  );
}
