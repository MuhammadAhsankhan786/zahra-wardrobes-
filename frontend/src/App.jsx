import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// 🔑 Import category pages/components
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> {/* ✅ About route */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* ✅ Contact route */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* ✅ Category Route */}
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
        <Footer /> {/* ✅ Footer global rahega */}
      </AuthProvider>
    </Router>
  );
}

export default App;
