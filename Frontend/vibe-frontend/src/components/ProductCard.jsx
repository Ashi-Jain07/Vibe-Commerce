import { Plus } from 'lucide-react'

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col">
      <div className="w-full h-48 bg-linear-to-br from-purple-400/20 to-pink-400/20 rounded-xl overflow-hidden mb-4">
        <img
          src={product.imgUrl || 'https://via.placeholder.com/200'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-white/70 text-sm mb-3 grow">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-pink-300 font-bold text-xl">₹{product.price}</span>
        <button
          onClick={() => onAdd(product._id)}
          className="bg-linear-to-r from-pink-500 to-purple-600 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;