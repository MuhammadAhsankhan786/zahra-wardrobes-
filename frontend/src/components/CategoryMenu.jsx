import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import {
  FaHome,
  FaTshirt,
  FaBaby,
  FaBath,
  FaShieldAlt,
  FaCubes,
  FaBabyCarriage,
} from "react-icons/fa";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/categories");
        setCategories(data);
      } catch (error) {
        console.error("❌ Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h3 className="text-lg font-bold mb-4">MENU</h3>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="flex items-center gap-2">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="flex items-center gap-2">
            <FaCubes /> All Products
          </Link>
        </li>

        {categories.map((cat, index) => (
          <li key={cat._id}>
            <Link
              to={`/category/${cat._id}`}
              className="flex items-center gap-2 hover:text-pink-600"
            >
              {/* Icon ka chakkar simple: manually assign karenge index ya naam se */}
              {index === 0 && <FaTshirt />}
              {index === 1 && <FaBaby />}
              {index === 2 && <FaBath />}
              {index === 3 && <FaShieldAlt />}
              {index === 4 && <FaBabyCarriage />}
              {cat.name}
            </Link>
          </li>
        ))}

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryMenu;
