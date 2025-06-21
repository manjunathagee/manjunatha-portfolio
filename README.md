# Manjunatha C - Senior Frontend Engineer Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing 11+ years of frontend development expertise. Features a clean design with dark/light mode support, smooth animations, and comprehensive project documentation.

## 🚀 Live Demo

Visit the live portfolio: [manjunatha-portfolio.vercel.app](https://manjunatha-portfolio.vercel.app/)

## 📋 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Blog System**: MDX-powered blog with syntax highlighting
- **Project Showcase**: Interactive project gallery with detailed case studies
- **Contact Form**: Integrated contact form with email functionality
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG 2.1 AA compliant components

## 🛠️ Tech Stack

### Frontend Frameworks
- **React 19** - Latest React with concurrent features
- **Next.js 15** - Full-stack React framework with App Router
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Modern icon library

### Content Management
- **MDX** - Markdown with React components for blog posts
- **JSON Data** - Structured data for portfolio content

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📁 Project Structure

```
manjunatha-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog pages and dynamic routes
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects page
│   │   └── layout.tsx         # Root layout
│   └── components/            # Reusable React components
│       ├── ui/                # Base UI components
│       ├── about-content.tsx  # About page content
│       ├── hero-section.tsx   # Homepage hero
│       ├── navigation.tsx     # Site navigation
│       └── ...
├── public/
│   ├── data/                  # JSON data files
│   │   ├── personal-info.json # Personal information
│   │   ├── projects.json      # Project data
│   │   ├── blog-posts.json    # Blog metadata
│   │   └── site-config.json   # Site configuration
│   ├── images/                # Static images
│   ├── blog/                  # Blog post markdown files
│   └── documents/             # Resume and other documents
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manjunathagee/manjunatha-portfolio.git
cd manjunatha-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Personal Information
Update your personal details in `public/data/personal-info.json`:
- Contact information
- Professional summary
- Skills and technologies
- Experience highlights

### Projects
Add or modify projects in `public/data/projects.json`:
- Project descriptions
- Technology stacks
- Live demo and repository links
- Project images

### Blog Posts
1. Add blog metadata to `public/data/blog-posts.json`
2. Create corresponding `.md` files in `public/blog/`
3. Blog posts support full MDX syntax with React components

### Site Configuration
Customize site settings in `public/data/site-config.json`:
- SEO metadata
- Social media links
- Navigation structure
- Theme preferences

## 🎨 Customization

### Styling
- Modify Tailwind configuration in `tailwind.config.ts`
- Update theme colors and typography
- Add custom CSS classes as needed

### Components
- All components are in `src/components/`
- UI components use Radix UI primitives
- Animations powered by Framer Motion

### Theming
- Dark/light mode handled by `next-themes`
- Theme toggle component included
- System preference detection

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

### Other Platforms
```bash
npm run build
npm run start
```

## 📊 Key Achievements Highlighted

- **11+ years** of frontend development experience
- **50+ projects** delivered successfully
- **20+ developers** mentored
- **40% average** performance improvements achieved
- **5+ internal applications** supported with unified design systems

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for personal portfolio use. Feel free to use as inspiration for your own portfolio.

## 📞 Contact

- **Email**: manjunathagee@gmail.com
- **Phone**: +91 9686061236
- **Location**: Bengaluru, Karnataka, India
- **LinkedIn**: [manjunatha-citragar](https://www.linkedin.com/in/manjunatha-citragar-54512827/)
- **GitHub**: [manjunathagee](https://github.com/manjunathagee)

---

Built with ❤️ using Next.js and modern web technologies.
