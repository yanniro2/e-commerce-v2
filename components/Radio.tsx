"use client";
import React, { useState } from "react";

// Define a type for the state to store the selected color
type ColorSelection = "red" | "green" | "blue";

const RadioButtonGroup: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorSelection | null>(
    null
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value as ColorSelection);
  };

  return (
    <div
      className={`flex gap-3 items-center border-[#CFCFCF] border px-6 py-[0.4rem] rounded-xl w-[15rem] hover:border-primary ${
        selectedColor === "red"
          ? "border-primary" // Change border color when selected
          : "border-bGray" // Default border color
      } `}>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-2"
          htmlFor="html"
          data-ripple-dark="true">
          <input
            id="html"
            name="type"
            type="radio"
            value="red"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#cfcfcf] text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#CFCFCF]  checked:before:bg-primary "
            checked={selectedColor === "red"}
            onChange={handleColorChange}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
        <label htmlFor="html">e-Money</label>
      </div>
    </div>
  );
};

export default RadioButtonGroup;
