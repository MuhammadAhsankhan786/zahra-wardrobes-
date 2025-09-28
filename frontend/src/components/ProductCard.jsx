import React from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ProductCard = ({ product, isAdmin, onEdit, onDelete }) => {
  // ✅ WhatsApp Number
  const phoneNumber = "923442013217";

  // ✅ Product image URL
  const productImage = product.image || product.imageUrl;

  // ✅ Message (WhatsApp preview will show product image)
  const message = `Hello, I am interested in this product:\n\nName: ${product.name}\nPrice: $${product.price}\n\n${productImage}`;

  // ✅ WhatsApp Link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const tiktokLink =
    "https://www.tiktok.com/@zahra_s_wardrobe?_t=ZS-8z8mJxCW6SL&_r=1";
  const instagramLink =
    "https://www.instagram.com/zahra_s_wardrobe?utm_source=qr&igsh=YjBvaHRsaGxtaWtt";

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col relative">
      <img
        src={product.image || product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 font-bold text-lg">{product.name}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>

      {/* Social Buttons */}
      <div className="mt-auto flex justify-around items-center gap-3 text-2xl">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href={tiktokLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition"
        >
          <FaTiktok />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-2 right-2 flex gap-2 text-lg">
          <button
            onClick={() => onEdit(product)}
            className="text-blue-500 hover:text-blue-600"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="text-red-500 hover:text-red-600"
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
