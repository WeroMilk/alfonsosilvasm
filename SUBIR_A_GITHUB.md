# Subir este proyecto a GitHub y desplegar en Vercel

El **origin** debe apuntar al repo correcto: **WeroMilk/alfonsosilvasm**

---

## Comprobar y hacer push

En una terminal **en esta carpeta**:

```bash
git remote -v
```

Debe mostrar: `origin  https://github.com/WeroMilk/alfonsosilvasm.git` (o `git@github.com:WeroMilk/alfonsosilvasm.git`).

Si no es ese repo, configúralo:

```bash
git remote set-url origin https://github.com/WeroMilk/alfonsosilvasm.git
```

Luego sube el proyecto (si el repo en GitHub tiene solo un "Initial commit", usa `--force`):

```bash
git push origin main --force
```

- Si pide usuario y contraseña, usa tu **Personal Access Token** de GitHub (no la contraseña de la cuenta).
- Si usas SSH: `git remote set-url origin git@github.com:WeroMilk/alfonsosilvasm.git` y después `git push origin main --force`.

---

## Después del push: desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New** → **Project**.
3. Importa el repo **WeroMilk/alfonsosilvasm**.
4. Vercel detectará Next.js; haz clic en **Deploy**.
5. Cada `git push origin main` a **alfonsosilvasm** disparará un deploy automático.
