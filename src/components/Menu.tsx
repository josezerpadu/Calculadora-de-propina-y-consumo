import { MenuItems } from "../types";
type MenuProps = {
  menu: MenuItems
  addOrder: (menu: MenuItems) => void
}

export const Menu = ({menu, addOrder} : MenuProps) => {
  return (
    <button 
      className="border-2 border-teal-500 hover:bg-teal-400 w-full p-3 flex justify-between rounded-lg"
      onClick={() => addOrder(menu)}  
    >
      <p>{menu.name}</p>
      <p className="font-black">${menu.price}</p>
    </button>
  )
}
