import { OrderItem } from "../types";

type ConsumoProps = {
  order: OrderItem[];
  removeOrder: (Orden: OrderItem) => void;
};

export const Consumo = ({ order, removeOrder }: ConsumoProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl text-center text-slate-900">
        Consumo
      </h2>
      <div>
        {order.length === 0 ? (
          <p className="text-center mt-5 border border-spacing-4 border-slate-300 p-5 rounded-lg back bg-gray-100">
            La orden esta vacia
          </p>
        ) : (
          order.map((item) => (
            <div
              className="space-y-3 flex justify-between border-t border-gray-200 items-center  mt-5 border border-spacing-4 p-5 rounded-lg back bg-gray-100"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} -${item.price}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -$
                  {(item.quantity * item.price).toFixed(2)}
                </p>
              </div>

              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black "
                onClick={() => removeOrder(item)}
              >
                X
              </button>
            </div>
          ))
          
        )}

        
        
        
      </div>
    </div>
  );
};
