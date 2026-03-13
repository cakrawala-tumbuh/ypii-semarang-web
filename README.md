# YPII Semarang Landing Page

This project is a modern landing page for YPII Semarang, built with Next.js and TypeScript. It features a clean, responsive design and highlights the institution's values, programs, and activities.

## Features
- Built with Next.js and React
- TypeScript for type safety
- Modular component structure
- Responsive layout for desktop and mobile
- Custom UI components
- Docker support for easy deployment

## Project Structure
```
b_Hs1LOjNvXJa-1772953190884/
├── app/                # Main app entry, global styles, layout, and pages
├── components/         # Reusable React components
│   └── ui/             # UI primitives and shared components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, etc.)
├── styles/             # Global CSS
├── Dockerfile          # Docker configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd b_Hs1LOjNvXJa-1772953190884
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running Locally
Start the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Docker
To build and run the app with Docker:
```bash
docker build -t ypii-semarang .
docker run -p 3000:3000 ypii-semarang
```

## Customization
- Update content and images in the `public/images` directory and component files in `components/`.
- Modify styles in `styles/globals.css`.

## License
This project is for educational and institutional use.

---

For more information, contact the project maintainers or visit the official YPII Semarang website.