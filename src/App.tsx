import { Routes, Route } from "react-router-dom";

import ProductDetail from "./components/Product/ProductDetail/ProductDetail";
import Footer from "./components/Footer";
import ProductList from "./components/Product/ProductList/ProductList";
import SearchPage from "./components/Product/Search/SearchPage";

import ScrollToTop from "./components/ScrollToTop";
import Wishlist from "./components/Product/ProductDetail/Wishlist";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
       <Navbar />  
           <ScrollToTop />
      <main className="flex-1">
        <Routes>
          {/* Product Listing Pages */}
          <Route path="/" element={<ProductList />} />

          <Route
            path="/product/category/:categorySlug"
            element={<ProductList />}
          />

          <Route
            path="/product/category/:categorySlug/:typeSlug"
            element={<ProductList />}
          />

          <Route
            path="/product/category/:categorySlug/:typeSlug/:subSlug"
            element={<ProductList />}
          />

           <Route path="/search" element={<SearchPage />} />
 {/* Product Detail Page */}
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="wishlist" element={<Wishlist />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}
