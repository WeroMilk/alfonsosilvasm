# Rev Tech Dev — Landing

Landing personal para mostrar tu trabajo como desarrollador web y captar clientes. Hecha con **Next.js 14**, lista para desplegar en **Vercel**.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build y despliegue en Vercel

```bash
npm run build
```

1. Sube el repo a GitHub.
2. En [vercel.com](https://vercel.com) conecta el repositorio.
3. Vercel detectará Next.js y desplegará automáticamente.

## Personalización

- **Nombre y bio:** Edita `app/page.tsx` (hero-title, hero-role, hero-bio).
- **WhatsApp:** Cambia el número en el enlace `wa.me/521234567890` en `app/page.tsx`.
- **Proyectos:** Añade o quita sitios en `data/projects.ts`.
- **Screenshots de proyectos:** Para que cada proyecto muestre una miniatura real, guarda capturas de pantalla en `public/projects/` con el nombre que usa cada proyecto (ej. `smperfumesarabes.png`, `supzonax.png`, etc.). Si el archivo no existe, se muestra un placeholder.
- **Foto de perfil:** Está en `public/avatar.png`. Sustituye ese archivo para cambiar la foto.

## Estructura

- `app/layout.tsx` — Layout y metadata.
- `app/page.tsx` — Página principal (hero + proyectos + footer).
- `app/globals.css` — Estilos globales (paleta y componentes).
- `data/projects.ts` — Lista de proyectos y URLs.
