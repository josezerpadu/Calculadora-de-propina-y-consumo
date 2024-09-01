import { useState } from "react";
import { menuItems } from "./data/ds";
import { Menu } from "./components/Menu";
import { useOrder } from "./hook/useOrder";
import { Consumo } from "./components/Consumo";
import { TipPercentage } from "./components/TipPercentage";
import { OrderTotals } from "./components/OrderTotals";

function App() {
  const [data] = useState(menuItems);
  const {addOrder, order, removeOrder, tip, calculandoPropina, closetOrder} = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl text-slate-900 font-black">
          Calculadora de Propina y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md: grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black text-center text-slate-900">Menu</h2>
          <div className="space-y-3 mt-10">
            {data.map((menu) => (
              <Menu key={menu.id} menu={menu} addOrder={addOrder} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <Consumo order={order} removeOrder={removeOrder}/>
          {order.length > 0 && <TipPercentage calculandoPropina={calculandoPropina} />}
          <OrderTotals order={order} tip={tip} closetOrder={closetOrder} />
        </div>
      </main>
    </>
  );
}

export default App;
