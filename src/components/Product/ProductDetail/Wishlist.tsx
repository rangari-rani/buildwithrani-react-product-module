import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../data/products";
import { FiHeart } from "react-icons/fi";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  // Keep localStorage in sync when removing items
  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => {
      const updated = prev.filter((id) => id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const wishlistedProducts = products.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlistedProducts.length === 0 ? (
     <div className="text-center py-16 text-gray-500">
  <FiHeart
    size={42}
    className="mx-auto mb-4 text-red-300 animate-pulse"
  />
  <p className="mb-3 text-lg">Your wishlist is empty</p>
  <Link
    to="/"
    className="inline-flex items-center gap-1 text-green-600 hover:underline"
  >
    Start exploring products →
  </Link>
</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="wishlist"
              onToggleWishlist={() => toggleWishlist(product.id)}
              showCategory
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
