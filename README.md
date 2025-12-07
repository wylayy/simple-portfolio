# Simple Portfolio Website

A stunning, modern portfolio website built with **Next.js 16**, featuring advanced animations, centralized configuration, and a minimal design aesthetic. Designed for developers who want a professional presence without the hassle.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-ff0055?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)

## ✨ Key Features

- **🎨 Modern & Minimalist Design**: Clean aesthetics with a focus on typography and whitespace.
- **⚙️ Centralized Configuration**: Manage all content (text, links, projects) from a single `settings.json` file.
- **⚡ High Performance**: Optimized for speed with Next.js 16, achieving 95+ Lighthouse scores.
- **🎬 Advanced Animations**: Smooth page transitions, scroll reveals, and interactive elements using Framer Motion.
- **📱 Fully Responsive**: Looks perfect on all devices, from mobile phones to large desktops.
- **🔍 SEO Optimized**: Built-in metadata management for better search engine visibility.
- **🧩 Component-Based**: Modular architecture for easy maintenance and scalability.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font)

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com).

1. Push your code to a GitHub repository.
2. Go to Vercel and "Add New Project".
3. Import your repository.
4. Click **Deploy**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fsimple-portfolio)

## 🎯 Configuration

The entire content of the website is driven by the `settings.json` file. You don't need to touch the code to update your information!

### How to Edit Content

Open `settings.json` and modify the values:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Full Stack Developer",
    "email": "hello@example.com",
    // ...
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
    // ...
  },
  "projects": [
    // Add your projects here
  ]
}
```

### Customizing Colors

To change the color theme, edit `app/globals.css`:

```css
:root {
  --background: #0a0a0a;  /* Main background color */
  --foreground: #f5f5f5;  /* Main text color */
  --accent: #ffffff;      /* Accent color for highlights */
  --muted: #6b7280;       /* Muted text color */
}
```

## 📁 Project Structure

```
simple-portfolio/
├── app/
│   ├── components/         # UI Components (Hero, About, Projects, etc.)
│   ├── globals.css         # Global styles & theme variables
│   ├── layout.tsx          # Root layout & SEO
│   └── page.tsx            # Main entry point
├── public/                 # Static assets (images, icons)
├── settings.json           # ⚡ Main Configuration File
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json           # TypeScript config
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Created with ❤️ by Waylay**
