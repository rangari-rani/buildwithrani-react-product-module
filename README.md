# 🧭 Landing Page UI - React + Tailwind  

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

A clean and responsive landing page user interface built using React and Tailwind CSS, designed to be reusable across web applications.

---

## 🚀 Live Demo: [Try it on Vercel](https://buildwithrani-react-landing-page-ui.vercel.app/)

---

## ⚙️ Tech Stack

- ⚛️ [**React.js (Vite)**](https://vitejs.dev/) – modern frontend build tool for fast development  
- 🎨 [**Tailwind CSS**](https://tailwindcss.com/) – utility-first CSS framework for responsive styling  
- 🔷 [**TypeScript**](https://www.typescriptlang.org/) – ensures type safety and clean component design  

---

## 📸 Screenshots

### 🖥️ Desktop View
![Landing Page Desktop Preview](https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/landing-hero-ss.png)
_Hero Section_
![Landing Page Category Preview](https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/landing-slider-ss.png)
_Catgeory Section_
![Landing Page Footer Preview](https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/landing-footer-ss.png)
_Footer Section_

### 📱 Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/mobile-landing-top-ss.png" alt="Mobile Hero View" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/mobile-landing-hero-ss.png" alt="Mobile Categories View" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-landing-page-ui/blob/6e7f2367f086f1aff1651e58e74113bedeac3308/public/mobile-landing-footer-ss.png" alt="Mobile Footer View" width="22%">
</p>

_Mobile responsive design screenshots_

---

## ✨ Features 

- **Hero Section** — auto-sliding carousel with customizable text and a clear CTA button.  
- **Category Card Grid** — responsive square-card layout with concise descriptions and smooth hover effects.  
- **Circular Carousel** — rounded product slider built with React Slick for a dynamic, engaging feel.  
- **Category Grid Layout** — static product grouping with a focal image and supporting thumbnails.  
- **Newsletter Signup** — minimal subscription bar with a responsive input and animated button.  
- **Testimonial Grid** — customer reviews with initials, product notes, and star ratings.  
- **Footer Section** — clean footer with quick links, social icons, and essential site info.

---

## 📂 Folder Structure

<details>
<summary><strong>📂 Click to view folder structure</strong></summary>

```tsx
src/
├── App.tsx
├── components/
│   ├── active-life/
│   │   ├── ActiveLifeCollection.tsx
│   │   └── getActiveLifeProducts.ts
│   │
│   ├── cards/
│   │   └── GymCard.tsx
│   │
│   ├── carousels/
│   │   └── GymCarousel.tsx
│   │
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── HeroBadges.tsx
│   │   ├── heroData.ts
│   │   └── HeroSlider.tsx
│   │
│   ├── home-essentials/
│   │   ├── HomeEssentials.tsx
│   │   └── homeEssentialsData.ts
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── shared/
│   │   ├── Newsletter.tsx
│   │   └── testimonials/
│   │       ├── TestimonialCard.tsx
│   │       ├── testimonialData.ts
│   │       └── Testimonials.tsx
│   │
│   └── top-category/
│       ├── CategoryCard.tsx
│       ├── categoryData.ts
│       └── TopCategory.tsx
│
├── data/
│   └── products.ts
│
├── pages/
│   └── Home.tsx
│
└── utils/
    └── slug.ts

```
</details>

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/buildwithrani-react-landing-page-ui.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```
> App runs at:
🌐 http://localhost:5173

---

## ✨ Part of BuildWithRani

This project is part of the **BuildWithRani** learning series.

📖 Implementation details:  [buildwithrani.com](https://buildwithrani.com)

---

## 📬 Contact

Connect with me on **[LinkedIn – Rani Rangari](https://www.linkedin.com/in/rani-rangari/)**  

⭐ If you found this project helpful, consider giving it a star!
