import React, { useEffect, useState } from 'react';
import { api } from '../api';
import ProductCard from '../components/ProductCard';

const Home = ({ setCartCount, user }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    if (user) fetchCart();
  }, [user]);

  async function fetchProducts() {
    try {
      const data = await api('/products');
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchCart() {
    try {
      const data = await api('/cart', { method: 'GET' });
      setCartCount(data.items.length);
    } catch (err) {
      setCartCount(0);
      console.log(err);

    }
  }

  async function handleAdd(productId) {
    try {
      if (!user) return alert('Please login to add items to cart');

      await api('/cart',
        {
          method: 'POST',
          body: JSON.stringify({ productId, qty: 1 })
        }
      );

      fetchCart()
    } catch (err) {
      alert(err.message || 'Error adding to cart');
    }
  }

  return (
     <div className="min-h-screen bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-white mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p._id} product={p} onAdd={handleAdd} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;