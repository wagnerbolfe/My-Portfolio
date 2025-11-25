# macOS Portfolio (React + Vite)

An interactive, macOS-inspired personal portfolio built with React and Vite. The UI emulates macOS windows (Finder, Safari, Terminal, Photos, etc.), with draggable windows, animated interactions, and a dock/navigation bar.

This repository started from the official Vite React template and has been customized for the portfolio experience.

## Stack
- Language: JavaScript (ES Modules)
- Framework: React 19
- Build tool/dev server: Vite 7
- Styling: Tailwind CSS v4
- Animations: GSAP (+ Draggable plugin)
- State management: Zustand
- Misc: react-tooltip, react-pdf, dayjs, clsx
- Linting: ESLint 9 with React plugins
- Package manager: npm (package-lock.json present)

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm 9+ (comes with Node)

## Getting Started
1. Install dependencies:
   - npm install
2. Start the development server:
   - npm run dev
3. Open the app:
   - Vite will print a local URL (by default http://localhost:5173). Open it in your browser.

## Scripts
- npm run dev — start the Vite dev server with HMR
- npm run build — build for production to dist/
- npm run preview — locally preview the production build
- npm run lint — run ESLint on the codebase

## Entry Points
- index.html — Vite HTML entry that loads the app and mounts the root element
- src/main.jsx — React root; creates the root and renders <App />
- src/App.jsx — Top-level component that composes the main windows (Dock, Navbar, Welcome, Terminal, Safari, Resume, Finder, Text, Image, Contact, Home)

## Project Structure (high-level)
```
macos_portfolio/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── jsconfig.json
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/           # via alias: #components
│   ├── constants/            # via alias: #constants
│   ├── hoc/                  # via alias: #hoc
│   ├── store/                # via alias: #store (Zustand)
│   └── windows/              # via alias: #windows (Finder, Safari, etc.)
└── node_modules/
```

### Module Aliases (from vite.config.js)
- #components → src/components
- #constants → src/constants
- #store → src/store
- #hoc → src/hoc
- #windows → src/windows

## Environment Variables
- None are currently required or referenced in the codebase (no usage of import.meta.env found).
- TODO: If you introduce API keys or analytics, document expected variables here and consider creating an .env.example file.

## Styling
- Tailwind CSS v4 is used. Global styles and component layers live in src/index.css.

## Building and Deployment
1. Build the project:
   - npm run build
2. Preview the production build locally:
   - npm run preview
3. Deploy the contents of dist/ to any static host (e.g., Netlify, Vercel, GitHub Pages, nginx, S3 + CloudFront).

## Testing
- No automated tests are present in this repository.
- TODO: Add unit/component tests (e.g., Vitest + React Testing Library) and document how to run them here.

## Linting
- Run lints with: npm run lint
- ESLint configuration lives in eslint.config.js (using @eslint/js and React plugins).

## Useful Notes
- Draggable windows are powered by GSAP and the Draggable plugin (registered in src/App.jsx).
- The application uses a static index.html that sets the favicon and mounts the root div.
- Images and static assets should be placed under public/ and referenced as /path.

## License
- TODO: Add a LICENSE file and specify the license here (e.g., MIT). Until then, treat the code as All Rights Reserved by default.

## Acknowledgements
- Based on the Vite React template.
- React Compiler is not enabled by default. If you plan to enable it, see the official docs: https://react.dev/learn/react-compiler/installation
