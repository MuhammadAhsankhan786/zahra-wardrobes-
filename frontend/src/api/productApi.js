import API from "./axios";

// Fetch all products
export const fetchProducts = async () => {
  const { data } = await API.get("/products");
  return data;
};

// Fetch single product by id
export const fetchProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};

// Create product (Admin only)
export const createProduct = async (productData) => {
  const { data } = await API.post("/products", productData);
  return data;
};

// Update product (Admin only)
export const updateProduct = async (id, productData) => {
  const { data } = await API.put(`/products/${id}`, productData);
  return data;
};

// Delete product (Admin only)
export const deleteProduct = async (id) => {
  const { data } = await API.delete(`/products/${id}`);
  return data;
};
