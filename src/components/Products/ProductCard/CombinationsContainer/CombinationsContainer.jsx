/* eslint-disable react/prop-types */
import React from "react";
import './CombinationsContainer.css'

function CombinationsContainer({ onProductClick, combinations }) {
  return (
    <div className="combinations-container">
      {combinations ? (
        <div className="py-2">
          <p className="text-center bold">Selecione la talla</p>
          <div className="combinations flex justify-center items-center gap-2">
            {combinations.map((combination, index) => (
              <button
                onClick={() => onProductClick(combination)}
                className="bg-black text-white w-8 h-8 rounded-full flex justify-center items-center text-sm
          hover:outline outline-2 outline-green-400 cursor-pointer"
                key={index}
              >
                {combination}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={() => onProductClick(null)} className="py-2">Add to cart</button>
      )}
    </div>
  );
}

export default CombinationsContainer;
