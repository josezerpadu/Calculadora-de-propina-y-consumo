import { useMemo } from "react";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  closetOrder:  () => void
}

export const OrderTotals = ({ order, tip, closetOrder} : OrderTotalsProps) => {

  // Utilizamos useMemo para memomorizar el codigo y solo ejecutar una vez el estado cambie
  const subTotal = useMemo(() => (order.reduce((total, item) => total + item.price * item.quantity, 0)), [order])

  const quantityTotal = useMemo(() => order.reduce((total, item) => total + item.quantity, 0), [order])

  const propi = useMemo(() => (tip * subTotal),[subTotal, tip])

  const total = (subTotal + propi);

  return (
    <>
   
      {order.length > 0 && (
        <div className=" mt-5 border border-spacing-4 border-slate-300 p-5 rounded-lg back bg-gray-100">
          <h2 className="font-black text-xl">Total y Propina <b>{tip * 100}%</b> </h2>
          <p className="font-medium ">
            Cantidades ={" "}
            <strong style={{ color: "red" }}>{quantityTotal}</strong>
          </p>
          <p className="font-medium">
            Sub-Total <b className=" text-red-600">${subTotal.toFixed(2)}</b> 
          </p>

          <p className="font-medium">
            Propina <b className=" text-red-600"> {propi.toFixed(2)}$ </b>  
          </p>


          <p className="font-medium text-lg text-red-600 mt-5">
            Total a pagar ${total.toFixed(2)}
          </p>

          <button className="bg-black w-full p-2 text-white font-bold mt-5 disabled:opacity-10"
            disabled={propi === 0}
            onClick={closetOrder}
          >
            Guardar orden
          </button>
          
        </div>
      )}
    </>
  );
};
