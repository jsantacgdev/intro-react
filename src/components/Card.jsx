import React from "react";

export const Card = ({ title, children }) => {
  return (
    <div className="card bg-white shadow-md rounded-lg p-6 m-3 flex flex-row justify-between items-center">
      <h1 className="card-title text-2xl font-bold text-pink-500  ">{title}</h1>
      <div className="card-content">{children}</div>
    </div>
  );
};
