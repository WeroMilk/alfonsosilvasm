# Que Vercel haga deploy en automático

## 1. Comprobar el repo en GitHub

- Entra a **https://github.com/WeroMilk/alfonsosilvas**
- La rama debe ser **main** y debe verse el código (carpeta `app`, `public`, `package.json`, etc.).

## 2. Conectar el repo correcto en Vercel

1. Entra a **https://vercel.com** e inicia sesión (con la cuenta de GitHub donde está **WeroMilk**).
2. **Add New…** → **Project**.
3. En “Import Git Repository” busca **WeroMilk/alfonsosilvas** (no otro repo como AlfonsoS/casas).
4. Si ya tienes un proyecto, entra a él → **Settings** → **Git**:
   - **Production Branch** debe ser **main**.
   - **Connected Git Repository** debe ser `WeroMilk/alfonsosilvas`.
5. Si el repo conectado es otro, **Disconnect** y vuelve a **Add New** → **Project** e importa **WeroMilk/alfonsosilvas**.

## 3. Ramas

- En **Settings** → **Git**, deja **Production Branch** en **main**.
- Los `git push origin main` que hagas a **WeroMilk/alfonsosilvas** deben disparar el deploy solo si este es el repo conectado y la rama es `main`.

## 4. Probar un deploy manual

- En el proyecto de Vercel: pestaña **Deployments** → **Redeploy** en el último deployment (o **Deploy** si te deja).
- Si no hay deployments, en **Overview** usa **Deploy** y elige la rama **main** del repo **WeroMilk/alfonsosilvas**.

## 5. Permisos de GitHub

- En **https://github.com/settings/installations** revisa que Vercel tenga acceso al usuario o org donde está **WeroMilk/alfonsosilvas**.
- Si el repo es de una organización, la org debe haber autorizado a Vercel.

Cuando el repo conectado sea **WeroMilk/alfonsosilvas** y la rama **main**, cada `git push origin main` a ese repo debería generar un nuevo deploy en Vercel.
