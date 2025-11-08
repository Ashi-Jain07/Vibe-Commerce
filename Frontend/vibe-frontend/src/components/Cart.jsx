import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react'

const Cart = ({ cart, onRemove, onUpdateQty }) => {
  if (!cart || cart.items.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
        <ShoppingCart className="w-16 h-16 text-white/50 mx-auto mb-4" />
        <p className="text-white/70 text-lg">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold text-white mb-6">Shopping Cart</h3>

      {cart.items.map(it => (
        <div key={it._id} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all">
          <div className="flex justify-between items-center gap-4">
            <div className="grow">
              <h4 className="text-white font-bold text-lg">{it.product.name}</h4>
              <p className="text-white/70">₹{it.product.price} × {it.qty} = ₹{it.product.price * it.qty}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => onUpdateQty(it._id, Math.max(1, it.qty - 1))}
                  className="w-8 h-8 flex items-center cursor-pointer justify-center text-white hover:bg-white/20 rounded transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-white font-bold w-8 text-center">{it.qty}</span>
                <button
                  onClick={() => onUpdateQty(it._id, it.qty + 1)}
                  className="w-8 h-8 flex items-center cursor-pointer justify-center text-white hover:bg-white/20 rounded transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => onRemove(it._id)}
                className="bg-red-500/20 text-red-300 cursor-pointer p-2 rounded-lg hover:bg-red-500/30 transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-linear-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/20 p-6">
        <div className="flex justify-between items-center">
          <span className="text-white text-2xl font-bold">Total:</span>
          <span className="text-pink-300 text-3xl font-bold">₹{cart.total}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;