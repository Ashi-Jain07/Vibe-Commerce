import { useState } from "react";
import { X, CreditCard } from 'lucide-react'

const CheckoutModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold text-white">Checkout</h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <input
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit({ name, email })}
            className="flex-1 bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all font-semibold flex items-center justify-center gap-2"
          >
            <CreditCard className="w-5 h-5" />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;