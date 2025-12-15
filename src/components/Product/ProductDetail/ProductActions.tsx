import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

type Props = {
  productId: number;
};

export default function ProductActions({ productId }: Props) {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);


  useEffect(() => {
    const saved: number[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    setIsWishlisted(saved.includes(productId));
  }, [productId]);

  const handleWishlist = () => {
     console.log("WISHLIST CLICKED", productId);
    const saved: number[] = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    let updated: number[];

    if (saved.includes(productId)) {
      updated = saved.filter((id) => id !== productId);
    } else {
      updated = [...saved, productId];
    }

    localStorage.setItem("wishlist", JSON.stringify(updated));
    setIsWishlisted(updated.includes(productId));

    navigate("/wishlist");
  };



  return (
    <div className="mt-4 flex flex-col md:flex-row gap-2 w-full max-w-[420px]">
      <button
        type="button"
        className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 shadow-md hover:bg-green-700 transition w-full"
      >
        <FiShoppingCart size={20} />
        Add to Cart
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 hover:bg-gray-100 transition w-full"
        onClick={handleWishlist}
      >
        {isWishlisted ? (
          <FaHeart size={20} className="text-red-500" />
        ) : (
          <FiHeart size={20} />
        )}
        Wishlist
      </button>
    </div>
  );
}
