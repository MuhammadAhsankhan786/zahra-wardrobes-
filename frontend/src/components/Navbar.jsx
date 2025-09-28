// import React, { useState, useContext, useEffect } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaWhatsapp,
//   FaTiktok,
//   FaInstagram,
// } from "react-icons/fa";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const toggleMenu = () => setOpen(!open);

//   const { isAdmin, logout } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:5000/api/categories"
//         );
//         setCategories(data);
//       } catch (error) {
//         console.error("❌ Error fetching categories", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const linkClass = "transition hover:text-pink-700";
//   const activeClass = "text-pink-700 font-semibold border-b-2 border-pink-600";

//   return (
//     <nav className="bg-pink-100 shadow-md fixed w-full z-50 top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Brand */}
//           <div className="flex-shrink-0 text-2xl font-bold text-pink-600">
//             Zahra's Wardrobe
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `${linkClass} ${isActive ? activeClass : ""}`
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/products"
//               className={({ isActive }) =>
//                 `${linkClass} ${isActive ? activeClass : ""}`
//               }
//             >
//               All Products
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `${linkClass} ${isActive ? activeClass : ""}`
//               }
//             >
//               About
//             </NavLink>

//             {/* Horizontal Dynamic Categories */}
//             {categories.map((cat) => (
//               <NavLink
//                 key={cat._id}
//                 to={`/category/${cat._id}`}
//                 className={({ isActive }) =>
//                   `${linkClass} ${isActive ? activeClass : ""}`
//                 }
//               >
//                 {cat.name}
//               </NavLink>
//             ))}

//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 `${linkClass} ${isActive ? activeClass : ""}`
//               }
//             >
//               Contact
//             </NavLink>

//             {/* Admin */}
//             {isAdmin ? (
//               <>
//                 <NavLink
//                   to="/admin"
//                   className={({ isActive }) =>
//                     `${linkClass} ${isActive ? activeClass : ""}`
//                   }
//                 >
//                   Admin Dashboard
//                 </NavLink>
//                 <button
//                   onClick={logout}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <NavLink
//                 to="/admin-login"
//                 className={({ isActive }) =>
//                   `${linkClass} ${isActive ? activeClass : ""}`
//                 }
//               >
//                 Admin Login
//               </NavLink>
//             )}

//             {/* Social Icons */}
//             <div className="flex space-x-3 text-xl">
//               <a
//                 href="https://wa.me/923442013217"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-500 hover:text-green-600 transition"
//               >
//                 <FaWhatsapp />
//               </a>
//               <a
//                 href="https://www.tiktok.com/@zahra_s_wardrobe?_t=ZS-8z8mJxCW6SL&_r=1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-black hover:text-gray-800 transition"
//               >
//                 <FaTiktok />
//               </a>
//               <a
//                 href="https://www.instagram.com/zahra_s_wardrobe?utm_source=qr&igsh=YjBvaHRsaGxtaWtt"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-pink-500 hover:text-pink-600 transition"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 text-2xl focus:outline-none"
//             >
//               {open ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-pink-50 px-4 pt-2 pb-4 space-y-1 shadow-md">
//           <NavLink
//             to="/"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 ${isActive ? activeClass : linkClass}`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/products"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 ${isActive ? activeClass : linkClass}`
//             }
//           >
//             All Products
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 ${isActive ? activeClass : linkClass}`
//             }
//           >
//             About
//           </NavLink>

//           {/* Categories */}
//           {categories.map((cat) => (
//             <NavLink
//               key={cat._id}
//               to={`/category/${cat._id}`}
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `block py-1 pl-4 ${
//                   isActive ? "text-pink-700 font-medium" : "hover:text-pink-700"
//                 }`
//               }
//             >
//               {cat.name}
//             </NavLink>
//           ))}

//           <NavLink
//             to="/contact"
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `block py-1 ${isActive ? activeClass : linkClass}`
//             }
//           >
//             Contact
//           </NavLink>

//           {isAdmin ? (
//             <>
//               <NavLink
//                 to="/admin"
//                 onClick={() => setOpen(false)}
//                 className={({ isActive }) =>
//                   `block py-1 ${isActive ? activeClass : linkClass}`
//                 }
//               >
//                 Admin Dashboard
//               </NavLink>
//               <button
//                 onClick={() => {
//                   logout();
//                   setOpen(false);
//                 }}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <NavLink
//               to="/admin-login"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 `block py-1 ${isActive ? activeClass : linkClass}`
//               }
//             >
//               Admin Login
//             </NavLink>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useContext, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleMenu = () => setOpen(!open);
  const { isAdmin, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/categories"
        );
        console.log("📌 Categories fetched:", data);
        setCategories(data);
      } catch (err) {
        console.error("❌ Error fetching categories", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const linkClass = "transition hover:text-pink-700";
  const activeClass = "text-pink-700 font-semibold border-b-2 border-pink-600";

  return (
    <nav className="bg-pink-100 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-pink-600">
            Zahra's Wardrobe
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              All Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>

            {/* ✅ Dynamic Categories */}
            {loading && <span className="text-gray-500">Loading...</span>}
            {error && <span className="text-red-500">{error}</span>}
            {!loading &&
              !error &&
              (categories.length > 0 ? (
                categories.map((cat) => (
                  <NavLink
                    key={cat._id}
                    to={`/category/${cat._id}`}
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeClass : ""}`
                    }
                  >
                    {cat.name}
                  </NavLink>
                ))
              ) : (
                <span className="text-gray-500">No categories</span>
              ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>

            {/* Admin */}
            {isAdmin ? (
              <>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeClass : ""}`
                  }
                >
                  Admin Dashboard
                </NavLink>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/admin-login"
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                Admin Login
              </NavLink>
            )}

            {/* Social Icons */}
            <div className="flex space-x-3 text-xl">
              <a
                href="https://wa.me/923442013217"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@zahra_s_wardrobe?_t=ZS-8z8mJxCW6SL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com/zahra_s_wardrobe?utm_source=qr&igsh=YjBvaHRsaGxtaWtt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 text-2xl focus:outline-none"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-pink-50 px-4 pt-2 pb-4 space-y-1 shadow-md">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block py-1 ${isActive ? activeClass : linkClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block py-1 ${isActive ? activeClass : linkClass}`
            }
          >
            All Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block py-1 ${isActive ? activeClass : linkClass}`
            }
          >
            About
          </NavLink>

          {/* ✅ Mobile Categories */}
          {loading && <span className="block text-gray-500">Loading...</span>}
          {error && <span className="block text-red-500">{error}</span>}
          {!loading &&
            !error &&
            (categories.length > 0 ? (
              categories.map((cat) => (
                <NavLink
                  key={cat._id}
                  to={`/category/${cat._id}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 pl-4 ${
                      isActive
                        ? "text-pink-700 font-medium"
                        : "hover:text-pink-700"
                    }`
                  }
                >
                  {cat.name}
                </NavLink>
              ))
            ) : (
              <span className="block text-gray-500">No categories</span>
            ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block py-1 ${isActive ? activeClass : linkClass}`
            }
          >
            Contact
          </NavLink>

          {isAdmin ? (
            <>
              <NavLink
                to="/admin"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1 ${isActive ? activeClass : linkClass}`
                }
              >
                Admin Dashboard
              </NavLink>
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/admin-login"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-1 ${isActive ? activeClass : linkClass}`
              }
            >
              Admin Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
