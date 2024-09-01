import { OrderItem, MenuItems } from "../types";
import { useState } from "react";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addOrder = (menu: MenuItems) => {
    const itemOrder = order.find((item) => item.id === menu.id);

    if (itemOrder) {
      const updateOrder = order.map((item) => {
        return item.id === menu.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...menu, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeOrder = (Orden: OrderItem) => {
    const clear = order.filter((item) => item !== Orden);
    setOrder(clear);
  };

  const calculandoPropina = (tipes : number) => {
    setTip(tipes / 100)
  }

  const closetOrder = () => {
    setOrder([])
    setTip(0)
  }


  return {
    addOrder,
    order,
    removeOrder,
    tip,
    calculandoPropina,
    closetOrder
  };
};
