# Margaret Kuofie – Author & Storyteller Website

A modern, professional website for author Margaret E. Kuofie, built with Next.js 15, TypeScript, and Tailwind CSS. This platform showcases her books, speaking engagements, and provides a comprehensive content management system for stories and blog posts.

## 🌟 Features

### Public-Facing Features
- **Author Portfolio**: Professional about page with bio and credentials
- **Book Showcase**: Interactive book gallery with detailed pages and purchase links
- **Speaking Engagements**: Information about talks, audio samples, and booking system
- **Blog & Stories**: Dynamic content system with individual post pages
- **Contact System**: Professional contact forms with validation
- **Responsive Design**: Optimized for all devices and screen sizes

### Content Management
- **Database Integration**: PostgreSQL with Drizzle ORM and Supabase
- **Story Management**: Full CRUD operations for blog posts and stories
- **Status Management**: Draft, published, and archived content states
- **Dashboard Interface**: Clean admin interface for content management

### Technical Features
- **Modern Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Animations**: Smooth interactions with Framer Motion
- **Form Validation**: React Hook Form with Zod schema validation
- **Database**: Supabase PostgreSQL with Drizzle ORM
- **API Routes**: RESTful API for content management
- **Accessibility**: WCAG compliant with semantic HTML and proper ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Supabase account and project
- PostgreSQL database

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd margaret-kuofie-website
   bun install # or npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with:
   ```env
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_DATABASE_URL=your_postgresql_connection_string
   ```

3. **Set up the database:**
   ```bash
   bun run db:generate  # Generate migrations
   bun run db:migrate   # Run migrations
   ```

4. **Start the development server:**
   ```bash
   bun dev # or npm run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── posts/         # Blog/story CRUD operations
│   ├── books/             # Book showcase and individual book pages
│   ├── contact/           # Contact form
│   ├── dashboard/         # Content management dashboard
│   ├── speaking/          # Speaking engagements
│   └── stories/           # Blog/story listing and individual posts
├── components/            # Reusable UI components
│   └── layout/           # Header and footer components
├── db/                   # Database configuration and schema
├── lib/                  # Utility functions and data
└── public/               # Static assets
```

## 🛠 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Backend & Database
- **[Supabase](https://supabase.com/)** - Backend as a Service
- **[PostgreSQL](https://www.postgresql.org/)** - Database
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe ORM
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migrations

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation integration

### Development Tools
- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[TypeScript](https://www.typescriptlang.org/)** - Type checking

## 📊 Database Schema

### Posts Table
```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  content TEXT NOT NULL,
  status post_status DEFAULT 'draft' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TYPE post_status AS ENUM ('draft', 'published', 'archived');
```

## 🔧 Available Scripts

```bash
# Development
bun dev                 # Start development server
bun build              # Build for production
bun start              # Start production server

# Database
bun run db:generate    # Generate database migrations
bun run db:migrate     # Run database migrations
bun run db:studio      # Open Drizzle Studio

# Code Quality
bun run biome:check    # Format and lint code
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (600-700) for main actions and links
- **Secondary**: Purple (600-700) for accents and gradients
- **Neutral**: Slate (50-900) for text and backgrounds
- **Status Colors**: Green (success), Red (error), Yellow (warning)

### Typography
- **Headings**: Geist Sans with bold weights
- **Body**: Geist Sans with regular weight
- **Code**: Geist Mono for technical content

### Spacing
- **System**: 8px base unit (0.5rem increments)
- **Breakpoints**: Mobile-first responsive design

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: High contrast ratios and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic structure
- **Focus Management**: Visible focus indicators and logical tab order

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is proprietary and belongs to Margaret E. Kuofie. All rights reserved.

## 📞 Support

For technical support or questions about the website, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Margaret E. Kuofie**  
*Empowering stories that bridge cultures and touch hearts*