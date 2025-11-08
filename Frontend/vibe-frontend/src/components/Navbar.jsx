import { Sparkles, Package, ShoppingCart, LogOut } from 'lucide-react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar({ cartCount = 0, user, setUser }) {

    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false)

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        setUser(null);
        navigate('/');
    };

    return (
        <div className="bg-linear-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md border-b border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex justify-between items-center">

                    <Link to='/' className="text-2xl font-bold text-white hover:text-pink-300 transition-colors flex items-center gap-2">
                        <Sparkles className="w-6 h-6" />
                        Vibe Commerce
                    </Link>

                    <div className="flex gap-6 items-center">

                        <Link to='/orders' className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                            <Package className="w-5 h-5" />
                            Orders
                        </Link>

                        <Link to='/cart' className="relative text-white/80 hover:text-white transition-colors flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Cart
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-linear-to-r from-pink-500 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {
                            user ? (
                                <div className="relative">
                                    <button
                                        className="bg-linear-to-br from-pink-500 to-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer font-bold hover:scale-110 transition-transform"
                                        onClick={() => setShowLogout(!showLogout)}
                                    >
                                        {user.name.charAt(0).toUpperCase()}
                                    </button>

                                    {showLogout && (
                                        <button
                                            className="absolute top-12 right-0 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg"
                                            onClick={logout}
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Logout
                                        </button>
                                    )}

                                </div>

                            ) : (

                                <Link to='/login' className="bg-linear-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                                    Login
                                </Link>

                            )
                        }

                    </div>

                </div>
            </div>
        </div>
    );
}