import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ Form state (image ko file rakha jayega)
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null, // yahan file save hogi
  });

  const token = localStorage.getItem("adminToken");

  // ✅ Config for protected routes
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // ✅ Fetch products from backend
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
      setProducts(data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Handle input change (file aur text alag handle kar rahe hain)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // agar file hai to `files[0]` otherwise normal value
    }));
  };

  // ✅ Add / Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // FormData banana hoga kyunki image file bhej rahe hain
      const formData = new FormData();
      for (const key in form) {
        if (form[key]) formData.append(key, form[key]);
      }

      if (editingProduct) {
        // ✅ Update product
        await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          formData,
          {
            ...config,
            headers: {
              ...config.headers,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // ✅ Add new product
        await axios.post("http://localhost:5000/api/products", formData, {
          ...config,
          headers: {
            ...config.headers,
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // ✅ Reset form
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      console.error("❌ Error saving product:", err);
      alert(" please try again!");
    }
  };

  // ✅ Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: null, // file dobara select karni hogi
    });
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`http://localhost:5000/api/products/${id}`, config);
      fetchProducts();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Add/Edit Form */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
          <input
            type="file"
            name="image"
            key={form.image ? form.image.name : "file"} // 👈 key change se input reset hota hai
            onChange={handleChange}
            className="p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition col-span-2"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <img
              src={p.image || p.imageUrl}
              alt={p.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="mt-2 font-bold">{p.name}</h2>
            <p>${p.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                onClick={() => handleEdit(p)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(p._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
