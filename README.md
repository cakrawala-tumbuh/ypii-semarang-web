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

## Konfigurasi Environment (Odoo API)

Form Contact Us mengirim data ke Odoo CRM via REST API. Konfigurasinya dibedakan per environment menggunakan file `.env.*.local` (otomatis di-gitignore — **jangan di-commit**).

### File yang dibutuhkan

| File | Dipakai saat |
|------|-------------|
| `.env.development.local` | `pnpm dev` |
| `.env.production.local` | `pnpm build && pnpm start` |

### `.env.development.local` (development / localhost)

```env
ODOO_API_URL=http://localhost:14069
ODOO_API_DB=nama_database_dev
# Basic Auth: base64 dari "admin:PASSWORD"
ODOO_API_AUTH=
```

### `.env.production.local` (production)

```env
ODOO_API_URL=https://odoo.cantum-ypii.com
ODOO_API_DB=nama_database_production
# Basic Auth: base64 dari "admin:PASSWORD"
ODOO_API_AUTH=
```

### Generate nilai `ODOO_API_AUTH`

```bash
echo -n "admin:PASSWORD_ANDA" | base64
```

Salin output-nya ke field `ODOO_API_AUTH`.

### Cara kerja

- `pnpm dev` → otomatis membaca `.env.development.local` → hit Odoo localhost
- `pnpm build && pnpm start` → otomatis membaca `.env.production.local` → hit Odoo production
- Tidak perlu mengubah konfigurasi apapun saat berpindah environment

> Credential **tidak pernah terekspos ke browser** — semua request ke Odoo dilakukan dari server via Next.js Server Action (`app/actions/contact.ts`).

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