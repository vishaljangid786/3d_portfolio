# 3D Developer Portfolio

A modern, interactive 3D developer portfolio built with React, Three.js, and Tailwind CSS. Showcase your projects, skills, and experience with stunning 3D visualizations and smooth animations.

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **3D Interactive Models** - Island, Plane, Bird, Fox, and Sky models powered by Three.js
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - React Spring animations for smooth transitions
- **Resume Viewer** - Built-in PDF resume viewer with download functionality
- **Email Integration** - Contact form powered by EmailJS
- **Multiple Pages** - Home, About, Projects, Certificate, Contact, and Resume sections
- **Modern UI** - Clean, professional design with Tailwind CSS styling
- **Dynamic Routing** - React Router for seamless page navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **3D Graphics**: Three.js 0.157.0 + React Three Fiber 8.14.5
- **3D Components**: React Three Drei 9.88.2
- **Animations**: React Spring Three 9.7.3
- **Styling**: Tailwind CSS 3.3.3
- **Routing**: React Router DOM 6.17.0
- **PDF Viewing**: React PDF 7.7.0 + pdfjs-dist 3.11.174
- **Email Service**: EmailJS Browser 3.11.0
- **Timeline**: React Vertical Timeline Component 3.6.0
- **Build Tool**: Vite 4.4.5
- **Hosting**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Alert.jsx           - Alert notifications
│   ├── CTA.jsx             - Call-to-action compo
│   ├── Footer.jsx          - Footer section
│   ├── HomeInfo.jsx        - Home info component
│   ├── Loader.jsx          - Loading spinner
│   ├── Navbar.jsx          - Navigation bar
│   └── index.js
├── pages/
│   ├── About.jsx           - About page
│   ├── Certificate.jsx     - Certificates page
│   ├── Contact.jsx         - Contact form page
│   ├── Home.jsx            - Home/landing page
│   ├── Projects.jsx        - Projects showcase
│   ├── Resume.jsx          - PDF resume viewer
│   └── index.js
├── models/
│   ├── Island.jsx          - Island 3D model
│   ├── Plane.jsx           - Plane 3D model
│   ├── Bird.jsx            - Bird 3D model
│   ├── Fox.jsx             - Fox 3D model
│   ├── Sky.jsx             - Sky 3D model
│   └── index.js
├── assets/
│   ├── 3d/                 - 3D model files
│   ├── icons/              - Icon assets
│   └── images/             - Image assets
├── constants/              - App constants
├── hooks/
│   └── useAlert.js         - Alert hook
├── App.jsx                 - Main app component
├── index.css              - Global styles
└── main.jsx               - App entry point

public/
└── resume.pdf             - Downloadable resume

Config Files:
├── vite.config.js         - Vite configuration
├── tailwind.config.js     - Tailwind CSS config
├── postcss.config.js      - PostCSS config
├── vercel.json            - Vercel deployment config
└── package.json           - Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file for EmailJS configuration (if using contact form)

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📦 Dependencies

### Main Dependencies
- react@18.2.0
- three@0.157.0
- react-three-fiber@8.14.5
- react-three-drei@9.88.2
- react-spring@9.7.3
- tailwindcss@3.3.3
- react-router-dom@6.17.0
- react-pdf@7.7.0
- pdfjs-dist@3.11.174
- @emailjs/browser@3.11.0
- react-vertical-timeline-component@3.6.0

### Dev Dependencies
- vite@4.4.5
- eslint@8.45.0
- autoprefixer@10.4.16
- postcss@8.4.31

## 🌐 Deployment

This project is configured for deployment on **Vercel**. Push your code to GitHub and connect your repository to Vercel for automatic deployments.

Vercel Configuration: See `vercel.json`

## 📝 Features Overview

### Mobile Navigation
- Responsive hamburger menu
- Smooth animations
- Full-screen overlay on mobile
- Click outside to close

### 3D Models
- Interactive 3D renders using Three.js
- Responsive canvas sizing
- Optimized performance

### Resume Viewer
- View PDF directly in browser
- Download resume functionality
- Multi-page support
- Error handling for PDF loading

### Contact Form
- EmailJS integration
- Form validation
- Success/error notifications

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by VJ**

