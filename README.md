# Saratchandra Patnaik - Portfolio

A modern, AI-focused portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Dark Mode Design** - Minimalist dark theme with developer-focused aesthetics
- ⚡ **Next.js 14** - Built with the latest Next.js App Router
- 💻 **TypeScript** - Fully typed for better developer experience
- 🎯 **Responsive** - Mobile-first design that works on all devices
- 🚀 **Performance** - Optimized for speed and SEO

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (body), Fira Code (headings)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bannump/bannump.github.io
cd bannump.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Option 2: GitHub Pages

1. Build the static export:
```bash
npm run build
```

2. The `out` folder contains your static site
3. Push to the `gh-pages` branch or use GitHub Actions

### Option 3: AWS S3 + CloudFront

For cloud-native deployment, you can host on S3 with CloudFront CDN.

## Customization

- Update personal information in `components/Hero.tsx`, `components/About.tsx`
- Modify project links in `components/Projects.tsx`
- Adjust colors in `tailwind.config.ts`
- Add your resume PDF to the `public` folder as `Saratchandra_Resume.pdf`

## License

MIT
