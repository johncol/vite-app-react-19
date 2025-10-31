# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

### Initial Setup

1. Ensure GitHub Pages is enabled in your repository settings:
   - Go to `Settings` → `Pages`
   - Under "Source", select branch: `gh-pages`
   - Select folder: `/ (root)`
   - Click `Save`

### Deploying

To deploy the site to GitHub Pages, run:

```bash
npm run deploy
```

This command will:
1. Build the production-ready site
2. Deploy it to the `gh-pages` branch

After deployment, your site will be available at:
`https://[your-username].github.io/vite-app-react-19/`

Note: It may take a few minutes for changes to be reflected after deployment.
