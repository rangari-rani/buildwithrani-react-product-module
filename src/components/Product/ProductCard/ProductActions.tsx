import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Product } from "../../../data/products";

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
  variant?: "default" | "wishlist";
};

export default function ProductActions({
  product,
  onAddToCart,
  variant = "default",
}: Props) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sync initial wishlist state
  useEffect(() => {
    const saved: number[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    setIsWishlisted(saved.includes(product.id));
  }, [product.id]);

  const toggleHeart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const saved: number[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    let updated: number[];

    if (saved.includes(product.id)) {
      updated = saved.filter((id) => id !== product.id);
      setIsWishlisted(false);
    } else {
      updated = [...saved, product.id];
      setIsWishlisted(true);
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="flex items-center gap-3">
      {variant === "default" && (
        <button
          type="button"
          onClick={toggleHeart}
          className={`p-1 transition-all duration-200 hover:scale-110 ${
            isWishlisted
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? <FaHeart size={18} /> : <FiHeart size={18} />}
        </button>
      )}

      <button
        type="button"
        onClick={() => onAddToCart?.(product)}
        className="text-green-600 hover:text-green-800 transition-transform duration-200 hover:scale-125"
        aria-label="Add to cart"
      >
        <FiShoppingCart size={22} />
      </button>
    </div>
  );
}
