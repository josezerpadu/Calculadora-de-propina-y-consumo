type ButtonPercentage = {
  porcentaje: number;
  calculandoPropina: (tip: number) => void
};

export const ButtonPercentage = ({ porcentaje, calculandoPropina }: ButtonPercentage) => {

  return (
    <div className="flex items-center justify-center"> 
      <button 
        className=" w-full h-full font-semibold hover:text-green-400 hover:text-xl hover:scale-105 py-3 px-9 rounded transform transition-transform duration-300 ease-in-out "
        onClick={() => calculandoPropina(porcentaje)}
      >
        {porcentaje === 0 ? 'Reset' : `${porcentaje}%`}
      </button>
    </div>
  );
};
