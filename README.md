# Grandma Margaret – Author & Speaker Website

A modern, accessible website for author Margaret Kuofie, built with Next.js 14, TypeScript, and Tailwind CSS. Features include book showcases, speaking engagement info, contact forms, and a dashboard for managing stories and blogs.

## Features

- **Books:** Browse featured books with detailed pages and purchase links
- **Speaking:** Learn about Margaret's talks, listen to audio samples, and book her for events
- **Contact Forms:** Accessible, validated forms for questions and booking requests
- **Dashboard:** Manage stories and blog posts (demo UI)
- **Accessible Design:** High color contrast, semantic HTML, and keyboard-friendly navigation
- **Responsive:** Looks great on all devices

## Getting Started

1. **Install dependencies:**
   ```bash
   bun install # or npm install, yarn, or pnpm
   ```
2. **Run the development server:**
   ```bash
   bun dev # or npm run dev, yarn dev, pnpm dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` – Main app directory (Next.js routing)
  - `books/` – Books listing and dynamic book pages
  - `speaking/` – Speaking engagement info and booking
  - `dashboard/` – Stories & blogs dashboard
  - `contact/` – Contact form
- `components/` – Reusable UI components
- `public/` – Static assets (images, audio, etc.)

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (form validation)

## Accessibility

- High color contrast for all text and UI elements
- Semantic HTML and ARIA labels where needed
- Keyboard navigation supported

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or your preferred platform.

---

© 2025 Margaret Kuofie. Built with ❤️ using Next.js.
