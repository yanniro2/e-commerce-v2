"use client";
import React, { useState } from "react";

const Num: React.FC = () => {
  const [number, setNumber] = useState<number>(1);

  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="bg-gray p-3 flex items-center gap-5">
      <button
        onClick={handleDecrement}
        disabled={number === 0}
        className=" cursor-pointer p-1 text-black opacity-50 hover:text-primary transition hover:opacity-100">
        -
      </button>
      <span>{number}</span>
      <button
        onClick={handleIncrement}
        disabled={number === 10}
        className="cursor-pointer p-1  text-black opacity-50 hover:text-primary transition hover:opacity-100">
        +
      </button>
    </div>
  );
};

export default Num;
