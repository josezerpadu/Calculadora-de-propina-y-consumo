import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { ButtonPercentage } from "./ButtonPercentage";

type TipPercentageProps = {
  calculandoPropina: (tipes: number) => void
};

export const TipPercentage = ({ calculandoPropina }: TipPercentageProps) => {

  const [percentage, setPercentage] = useState(false);
  

  return (
    <>
      <div className=" border border-spacing-4 border-slate-300 p-5 rounded-lg bg-gray-100">
        <div className="flex justify-center"> 
        <button
          className="  font-black text-xl flex items-end hover:text-green-400"
          onClick={() => setPercentage((value) => !value)}
        >
          Propina <AiOutlineDown />
        </button>
        </div>

        {percentage && (
          <div className=" flex justify-center flex-wrap">
            <ButtonPercentage porcentaje={10} calculandoPropina={calculandoPropina} />
            <ButtonPercentage porcentaje={20} calculandoPropina={calculandoPropina} />
            <ButtonPercentage porcentaje={30} calculandoPropina={calculandoPropina} />
            <ButtonPercentage porcentaje={0}  calculandoPropina={calculandoPropina} />
          </div>
        )}
      </div>
      
    </>
  );
};
