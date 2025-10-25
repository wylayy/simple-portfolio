# Simple Portfolio Website

A stunning, modern portfolio website built with Next.js 16, featuring advanced animations, centralized configuration, and a minimal design aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-ff0055)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)

## 🛠️ Technologies

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

## 📁 Project Structure

```
app/
├── components/              # All React components (26 total)
│   ├── Hero.tsx            # Landing section with animated name
│   ├── About.tsx           # About section with services
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Experience.tsx      # Work experience timeline
│   ├── Education.tsx       # Education history
│   ├── Certifications.tsx  # Certifications showcase
│   ├── Projects.tsx        # Project showcase with modal
│   ├── Testimonials.tsx    # Client reviews carousel
│   ├── Contact.tsx         # Contact section with form
│   ├── StatsCounter.tsx    # Animated statistics
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with links
│   ├── LoadingScreen.tsx   # Animated loading screen
│   ├── AnimatedBackground.tsx  # Dynamic background
│   ├── CustomCursor.tsx    # Custom cursor effect
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   ├── SectionIndicator.tsx    # Section navigation dots
│   ├── ParallaxText.tsx    # Parallax scrolling text
│   ├── MagneticButton.tsx  # Magnetic button effect
│   ├── ProjectModal.tsx    # Project details modal
│   ├── RevealText.tsx      # Text reveal animation
│   ├── AvailabilityStatus.tsx  # Availability indicator
│   ├── DownloadCV.tsx      # CV download button
│   ├── ContactForm.tsx     # Contact form
│   ├── PageTransition.tsx  # Page transitions
│   └── ThemeToggle.tsx     # Theme toggle (optional)
├── globals.css             # Global styles & theme
├── layout.tsx              # Root layout with SEO metadata
└── page.tsx                # Main portfolio page

settings.json               # 🎯 Centralized configuration
├── personal                # Personal info & availability
├── social                  # Social media links
├── seo                     # SEO metadata
├── skills                  # Technical skills
├── projects                # Portfolio projects
├── testimonials            # Client testimonials
├── experience              # Work experience
├── education               # Education history
├── certifications          # Certifications
├── services                # Services offered
├── stats                   # Statistics counters
├── contact                 # Contact details
├── theme                   # Theme colors
├── features                # Feature flags
├── integrations            # Third-party integrations
└── files                   # File paths (CV, images)
```

## 🎯 Customization

### ⚡ Quick Start - Edit `settings.json`

All portfolio content is centralized in one file! Just edit `settings.json`:

```json
{
  "personal": {
    "name": "Your Name",              // ← Change this
    "title": "Full Stack Developer",  // ← And this
    "email": "your@email.com",
    "tagline": "Your tagline here",
    "description": "Your description"
  },
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username"
  },
  "skills": [
    {
      "name": "React / Next.js",
      "level": 90,
      "category": "Frontend"
    }
  ],
  "projects": [
    {
      "title": "Your Project",
      "description": "Project description",
      "tech": ["React", "Next.js"],
      "link": "https://...",
      "github": "https://..."
    }
  ]
  // ... and more!
}
```

### 📝 What You Can Customize

1. **Personal Info** - Name, title, email, phone, location
2. **Social Links** - GitHub, LinkedIn, Twitter, etc.
3. **Skills** - Technical skills with levels
4. **Projects** - Portfolio projects with details
5. **Experience** - Work history with achievements
6. **Education** - Academic background
7. **Certifications** - Professional certifications
8. **Testimonials** - Client reviews
9. **Services** - Services you offer
10. **Stats** - Statistics counters
11. **SEO** - Meta tags and descriptions

### 🎨 Customize Colors

Edit `app/globals.css`:
```css
:root {
  --background: #0a0a0a;  /* Dark background */
  --foreground: #f5f5f5;  /* Light text */
  --accent: #ffffff;      /* White accent */
  --muted: #6b7280;       /* Gray muted */
}
```

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 3s
- ✅ Cumulative Layout Shift: < 0.1

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- TailwindCSS for utility-first CSS
- Vercel for hosting and fonts

---

**Made with ❤️ using Next.js**

For questions or support, open an issue.
