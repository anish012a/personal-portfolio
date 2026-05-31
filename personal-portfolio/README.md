# Professional Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for showcasing your work as a digital marketer, data specialist, and front-end developer.

## 🎯 Features

- ✨ Modern, clean UI with glassmorphism effects
- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design (mobile-first)
- 🎨 Smooth animations using Framer Motion
- 🚀 Fast performance with Vite
- 📊 Component-based architecture
- 🎯 SEO-friendly structure
- 📧 Contact form (ready for backend integration)
- 🖼️ Project gallery with filtering
- 📥 CV download section
- 🔗 Social media links
- ⚡ Optimized images and lazy loading ready

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation and theme toggle
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── SectionTitle.jsx     # Reusable section header
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Hero banner section
│   │   │   ├── About.jsx        # About me section
│   │   │   ├── Experience.jsx   # Work experience
│   │   │   ├── Projects.jsx     # Portfolio projects
│   │   │   ├── Skills.jsx       # Skills showcase
│   │   │   └── Contact.jsx      # Contact form
│   │   └── cards/
│   │       ├── ExperienceCard.jsx
│   │       └── ProjectCard.jsx
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📝 Customization

### Update Personal Information

Edit `src/components/sections/` files to add your:
- Name and title in **Hero.jsx**
- Professional summary in **About.jsx**
- Work experience in **Experience.jsx**
- Projects in **Projects.jsx**
- Skills in **Skills.jsx**
- Contact details in **Contact.jsx**

### Customize Colors

Edit `tailwind.config.js` to modify:
- Primary colors
- Dark mode colors
- Accent colors

### Add Projects

Update the `projects` array in `src/components/sections/Projects.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    category: 'websites', // or 'marketing', 'data', 'content'
    tools: ['React', 'Tailwind'],
    image: 'image-url',
    link: 'https://project-link.com'
  },
  // Add more projects...
]
```

### Update Experience

Edit the `experiences` array in `src/components/sections/Experience.jsx` with your work history.

### Connect Contact Form

The contact form in `Contact.jsx` is ready for integration with:
- Email service (Nodemailer, SendGrid, etc.)
- Backend API
- Service like Formspree or EmailJS

## 🎨 Design Features

### Dark Mode
- Automatic detection of system preference
- Manual toggle with persistent storage
- Smooth transitions between themes

### Animations
- Page load animations
- Scroll reveal effects
- Hover interactions
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Optimized images

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages
Update `vite.config.js`:
```js
export default {
  base: '/portfolio/',
  // ... rest of config
}
```

## 🔍 SEO Optimization

The portfolio includes:
- Meta tags in `index.html`
- Semantic HTML structure
- Fast page load times
- Mobile responsiveness
- Open Graph support ready

## 📄 CV Download

Add your CV file to the public folder and update the download link in `Hero.jsx`:

```jsx
<a href="/path-to-your-cv.pdf" download>
  Download Resume
</a>
```

## 🛠️ Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Google Analytics integration
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] PWA support
- [ ] CMS integration

## 📝 License

This project is open source and available under the MIT License.

## 💬 Support

For issues or questions, feel free to reach out through the contact form on the website.

---

Built with ❤️ by Amol Shrestha
