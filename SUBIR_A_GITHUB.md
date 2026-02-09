# Subir este proyecto a GitHub y desplegar en Vercel

Abre una terminal **en esta carpeta** (donde está `package.json`) y ejecuta los comandos en orden. Si ya tienes Git instalado y el repo creado en GitHub (WeroMilk/alfonsosilvas), usa la opción **B**.

---

## Opción A: Repo nuevo (primera vez)

```bash
git init
git add .
git commit -m "Portafolio Alfonso Silvas - Next.js, listo para Vercel"
git branch -M main
git remote add origin git@github.com:WeroMilk/alfonsosilvas.git
git push -u origin main
```

---

## Opción B: Ya hiciste `git init` o ya tienes repo

```bash
git add .
git commit -m "Portafolio Alfonso Silvas - Next.js, listo para Vercel"
git branch -M main
git remote add origin git@github.com:WeroMilk/alfonsosilvas.git
git push -u origin main
```

Si ya tenías un `remote` llamado `origin`, actualízalo:

```bash
git remote set-url origin git@github.com:WeroMilk/alfonsosilvas.git
git push -u origin main
```

---

## Después del push: desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (con GitHub).
2. **Add New** → **Project**.
3. Importa el repo **WeroMilk/alfonsosilvas**.
4. Vercel detectará Next.js; no cambies nada y haz clic en **Deploy**.
5. En unos minutos tendrás la URL (ej. `alfonsosilvas.vercel.app`).

Si quieres un dominio propio, en el proyecto en Vercel: **Settings** → **Domains** y añade tu dominio.
