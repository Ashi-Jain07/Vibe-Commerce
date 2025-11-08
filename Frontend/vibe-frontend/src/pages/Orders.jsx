import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Package } from 'lucide-react';

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await api('/checkout', { method: 'GET' });
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700">

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <Package className="w-10 h-10" />
          Your Orders
        </h3>

        {orders.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
            <Package className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <p className="text-white/70 text-lg">No orders found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders?.map(o => (
              <div key={o?._id} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-white/70 text-sm">Order ID</p>
                    <p className="text-white font-bold text-lg">{o?._id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-sm">Total</p>
                    <p className="text-pink-300 font-bold text-2xl">₹{o?.total}</p>
                  </div>
                </div>

                <p className="text-white/70 text-sm mb-4">
                  Placed: {new Date(o?.createdAt).toLocaleString()}
                </p>

                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Items:</p>
                  <ul className="space-y-1">
                    {o?.items.map(it => (
                      <li key={it?._id} className="text-white/80">
                        • {it?.product?.name} × {it.qty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;