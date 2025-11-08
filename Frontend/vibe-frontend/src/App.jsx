import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import { api } from './api';
import OpenCart from './pages/OpenCart';
import { Navbar } from './components/Navbar';

export default function App() {

  const [cartCount, setCartCount] = useState(0);

  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {

    async function load() {

      try {
        const data = await api('/cart',
          {
            method: 'GET'
          }
        );

        setCartCount(data.items.length);

      } catch (e) {
        console.log("error", e);
        setCartCount(0);
      }
    }
    load();
  }, [user]);

  return (
    <>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home setCartCount={setCartCount} user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<OpenCart />} />
      </Routes>
    </>
  );
}
