# Independent software engineering portfolio

A bilingual (English/Ukrainian) portfolio built with React, TypeScript, Vite, and Tailwind CSS. It is a static site designed for GitHub Pages. Project content is maintained in [`src/content.ts`](src/content.ts); no GitHub token, runtime API, or backend is required.

## Local development

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open the URL Vite prints. The default base is `/portfolio/`, so the local development URL may include that path.

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The build output is `dist/`. Vite copies `public/.nojekyll` and the project images into it. The production entry point, CSS, JavaScript, and project images all use the configured Vite base path.

## GitHub Pages deployment

The site is published at <https://thenbeverhd.github.io/portfolio/> from the public [`TheNBeverHD/portfolio`](https://github.com/TheNBeverHD/portfolio) repository. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on pushes to `main` and supports manual runs. It installs dependencies with `npm ci`, builds the site, uploads `dist` as a Pages artifact, and deploys with the official Pages actions. The workflow derives `VITE_BASE_PATH` from the repository name.

This workspace has no Git remote, and repository Pages settings were not available through the connected tools. The site has **not** been published or verified at the expected URL.

For a future root custom domain, build with `VITE_BASE_PATH=/ npm run build` and set the same value in the workflow (or change the default in `vite.config.ts`). Add the domain's `CNAME` file and configure DNS and Pages settings separately.

## Content and project evidence

The three selected repositories were inspected through their public README files and available source trees:

| Project | Evidence | Image source |
| --- | --- | --- |
| [ATELIER BARBER](https://github.com/TheNBeverHD/AppointmentBookingBot) | README, architecture/progress documents, booking and availability services, database repositories | Repository `docs/screenshots/`; the repository describes these as illustrative examples using demonstration data, not live Telegram captures |
| [Personal Finance Tracker](https://github.com/TheNBeverHD/finance-tracker) | README, domain/data modules, SQLDelight repository, platform hosts and tests | Repository `docs/screenshots/`; rendered with sample data |
| [Folio · Mini CRM](https://github.com/TheNBeverHD/MiniCRM) | README, FastAPI routes/services, React frontend, architecture document | Repository `screenshots/` |

No public live demo was verified for any of these projects, so the portfolio links only to their repositories. The GitHub profile README repository itself was not used as a featured project. Project labels distinguish personal work and the CRM MVP.

## Verification

`npm run typecheck` and `npm run build` passed. The deployed site was opened in a browser and its main portfolio content loaded successfully.

To edit translations, services, technology groups, and project studies, update `src/content.ts`. Every localized string has `en` and `uk` values. The selected language is stored in `localStorage` and applied without reloading. Project studies use hash URLs (`#project/...`) so direct links and reloads work on GitHub Pages without server rewrites.
