# 🧭 Product Module - React + Tailwind  

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

The Product module delivers the core product browsing and discovery experience, including listing, search, filtering, and detailed views.

---

## 🚀 Live Demo: [Try it on Vercel](https://buildwithrani-react-product-module.vercel.app)

---

## ⚙️ Tech Stack

- ⚛️ [**React.js (Vite)**](https://vitejs.dev/) – modern frontend build tool for fast development  
- 🎨 [**Tailwind CSS**](https://tailwindcss.com/) – utility-first CSS framework for responsive styling  
- 🔷 [**TypeScript**](https://www.typescriptlang.org/) – ensures type safety and clean component design  

---

## 📸 Screenshots

### 🖥️ Desktop View
![Product List Page](https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-list-desktop.png)
_Product List Page_
![Product Detail Page](https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-detail-desc-desktop.png)
_Product Detail Page_

### 📱 Mobile Views
<p align="center">
  <img src="https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-list-mobile.png" alt="Mobile Product Card" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-filters-mobile.png" alt="Mobile Product Filters" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-detail-mobile.png" alt="Mobile Product Detail" width="22%">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/rangari-rani/buildwithrani-react-product-module/blob/93cb41bd2cdda16955a71ef08fb0f67a7de0630b/public/product-detail-desc-mobile.png" alt="Mobile Product Detail" width="22%">
</p>

_Mobile responsive design screenshots_

---

## ✨ Features 



---

## 📂 Folder Structure

<details>
<summary><strong>📂 Click to view folder structure</strong></summary>

```tsx
src/
|
+---components
|   +---Product
|       |
|       +---ProductCard
|       |   ProductCard.tsx
|       |   ProductCardSkeleton.tsx
|       |
|       +---ProductList
|       |   ProductList.tsx
|       |   SortBar.tsx
|       |   Pagination.tsx
|       |   Breadcrumbs.tsx
|       |   |
|       |   +---FiltersSidebar
|       |   |   FiltersSidebar.tsx
|       |   |   PriceFilter.tsx
|       |   |   CategoryFilter.tsx
|       |   |   DiscountFilter.tsx
|       |   |   HighlightFilter.tsx
|       |   |
|       |   \---hooks
|       |       useProductFilters.ts
|       |       useProductSorting.ts
|       |       useBreadcrumbs.ts
|       |
|       +---ProductDetail
|       |   ProductDetail.tsx
|       |   ProductGallery.tsx
|       |   ProductInfo.tsx
|       |   RelatedProducts.tsx
|       |   Wishlist.tsx
|       |   |
|       |   \---hooks
|       |       useProductDetail.ts
|       |       useRelatedProducts.ts
|       |
|       \---Search
|           SearchBar.tsx
|           SearchPage.tsx
|           |
|           \---hooks
|               useSearch.ts
|
+---data
|   products.ts
|   categories.ts
```
</details>

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rangari-rani/buildwithrani-react-product-module.git
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
