import Cart from '../components/Cart';
import CheckoutModal from '../components/CheckoutModal';
import { api } from "../api";
import { useState, useEffect } from "react";
import { CreditCard } from 'lucide-react'

const OpenCart = () => {

    const [cart, setCart] = useState({ items: [], total: 0 });
    const [showCheckout, setShowCheckout] = useState(false);
    const [receipt, setReceipt] = useState(null);

    async function fetchCart() {
        try {
            const data = await api('/cart',
                {
                    method: 'GET'
                }
            );
            setCart(data);
        } catch (err) {
            setCart({
                items: [],
                total: 0
            });
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCart()
    }, []);

    async function handleRemove(id) {
        try {
            await api('/cart/' + id,
                {
                    method: 'DELETE'
                }
            );

            fetchCart();
        } catch (err) {
            alert(err.message || 'Error removing item');
        }
    }

    async function handleUpdateQty(id, qty) {
        try {
            await api('/cart/' + id,
                {
                    method: 'PUT',
                    body: JSON.stringify({ qty })
                }
            );

            fetchCart();
        } catch (err) {
            alert(err.message || 'Error updating qty');
        }
    }

    async function handleCheckout(info) {
        try {
            const data = await api('/checkout',
                {
                    method: 'POST',
                    body: JSON.stringify({ cartItems: cart.items })
                }
            );

            setReceipt(data.receipt);
            setShowCheckout(false);
            fetchCart();
        } catch (err) {
            alert(err.message || 'Checkout failed');
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700">

            <div className="max-w-4xl mx-auto px-6 py-12">
                <Cart cart={cart} onRemove={handleRemove} onUpdateQty={handleUpdateQty} />

                <button
                    onClick={() => setShowCheckout(true)}
                    className={`w-full mt-6 bg-linear-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${cart.items.length > 0 && 'hover:shadow-xl transform hover:scale-[1.02] transition-all cursor-pointer'}`}
                    disabled={cart.items.length === 0}
                >
                    <CreditCard className="w-6 h-6" />
                    Proceed to Checkout
                </button>

                {showCheckout && (
                    <CheckoutModal onClose={() => setShowCheckout(false)} onSubmit={handleCheckout} />
                )}

                {receipt && (
                    <div className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Receipt</h3>
                        <div className="space-y-2 text-white/90">
                            <p>Order ID: <span className="font-bold text-pink-300">{receipt.id}</span></p>
                            <p>Total: <span className="font-bold text-pink-300">₹{receipt.total}</span></p>
                            <p>Time: {new Date(receipt.timestamp).toLocaleString()}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OpenCart;