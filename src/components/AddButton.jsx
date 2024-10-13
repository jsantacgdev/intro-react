import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddButton = () => {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex text-center">
      <FaPlus className="mt-1 mr-2" /> Crear Encuesta
    </button>
  );
};
