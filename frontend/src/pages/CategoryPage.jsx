// // src/pages/CategoryPage.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CategoryPage = () => {
//   const { id } = useParams(); // ✅ URL se category ka id milega
//   const [products, setProducts] = useState([]);
//   const [categoryName, setCategoryName] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // ✅ category ki info le aao
//         const catRes = await axios.get(
//           `http://localhost:5000/api/categories/${id}`
//         );
//         setCategoryName(catRes.data.name);

//         // ✅ products filter by category
//         const prodRes = await axios.get(
//           `http://localhost:5000/api/products?category=${id}`
//         );
//         setProducts(prodRes.data);
//       } catch (error) {
//         console.error("❌ Error loading category page", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
//       <h1 className="text-2xl font-bold text-pink-600 mb-6">
//         {categoryName || "Category"} Products
//       </h1>

//       {products.length > 0 ? (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <div key={p._id} className="bg-white shadow rounded-lg p-4">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
//               <p className="text-pink-600 font-bold">Rs {p.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500">No products in this category.</p>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

// src/pages/CategoryPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { id } = useParams(); // ✅ URL se category ka id milega
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        // ✅ category ki info le aao
        const catRes = await axios.get(
          `http://localhost:5000/api/categories/${id}`
        );
        setCategoryName(catRes.data.name);

        // ✅ products filter by category
        const prodRes = await axios.get(
          `http://localhost:5000/api/products?category=${id}`
        );
        setProducts(prodRes.data);
      } catch (err) {
        console.error("❌ Error loading category page", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">
        {categoryName || "Category"} Products
      </h1>

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading products...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Products List */}
      {!loading && !error && (
        <>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((p) => (
                <div
                  key={p._id}
                  className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition duration-300"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="text-lg font-semibold mt-2 truncate">
                    {p.name}
                  </h2>
                  <p className="text-pink-600 font-bold">Rs {p.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products in this category.</p>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryPage;
