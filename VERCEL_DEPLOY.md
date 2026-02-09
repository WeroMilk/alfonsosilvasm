# Que Vercel haga deploy en automático

## 1. Comprobar el repo en GitHub

- Entra a **https://github.com/WeroMilk/alfonsosilvasm**
- La rama debe ser **main** y debe verse el código (carpeta `app`, `public`, `package.json`, etc.).

## 2. Conectar el repo correcto en Vercel

1. Entra a **https://vercel.com** e inicia sesión (con la cuenta de GitHub donde está **WeroMilk**).
2. **Add New…** → **Project**.
3. En “Import Git Repository” busca **WeroMilk/alfonsosilvasm** (no otro repo).
4. Si ya tienes un proyecto, entra a él → **Settings** → **Git**:
   - **Production Branch** debe ser **main**.
   - **Connected Git Repository** debe ser `WeroMilk/alfonsosilvasm`.
5. Si el repo conectado es otro, **Disconnect** y vuelve a **Add New** → **Project** e importa **WeroMilk/alfonsosilvasm**.

## 3. Ramas

- En **Settings** → **Git**, deja **Production Branch** en **main**.
- Los `git push origin main` que hagas a **WeroMilk/alfonsosilvasm** deben disparar el deploy solo si este es el repo conectado y la rama es `main`.

## 4. Probar un deploy manual

- En el proyecto de Vercel: pestaña **Deployments** → **Redeploy** en el último deployment (o **Deploy** si te deja).
- Si no hay deployments, en **Overview** usa **Deploy** y elige la rama **main** del repo **WeroMilk/alfonsosilvasm**.

## 5. Permisos de GitHub

- En **https://github.com/settings/installations** revisa que Vercel tenga acceso al usuario o org donde está **WeroMilk/alfonsosilvasm**.
- Si el repo es de una organización, la org debe haber autorizado a Vercel.

Cuando el repo conectado sea **WeroMilk/alfonsosilvasm** y la rama **main**, cada `git push origin main` a ese repo debería generar un nuevo deploy en Vercel.

---

## Deploy con GitHub Actions (alternativa si el webhook falla)

Hay un workflow en `.github/workflows/deploy-vercel.yml` que despliega a Vercel en cada push a **main**.

**Configuración (solo una vez):**

1. **Token de Vercel:** https://vercel.com/account/tokens → Create → copia el token.
2. **Org ID y Project ID:** En tu proyecto en Vercel → **Settings** → en la URL o en la parte inferior suele verse; o ejecuta en tu PC (con `vercel` instalado y logueado) en la carpeta del proyecto:  
   `vercel link` y luego revisa el archivo `.vercel/project.json` (ahí están `orgId` y `projectId`).
3. En **GitHub** → repo **WeroMilk/alfonsosilvasm** → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**, añade:
   - `VERCEL_TOKEN` = el token del paso 1
   - `VERCEL_ORG_ID` = tu org id
   - `VERCEL_PROJECT_ID` = tu project id

Después de guardar los 3 secrets, cada `git push origin main` ejecutará el workflow y desplegará en Vercel.
