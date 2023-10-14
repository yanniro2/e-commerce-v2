"use client"
import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | boolean>("");
  const [message, setMessage] = useState<string>("");

  // Function to handle input change and validation
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z\s]+$/;
    const inputValue = event.target.value;
    setName(inputValue);

    // Define your condition for a valid input (e.g., not empty)
    if (inputValue.trim() === "") {
      setMessage("Name cannot be empty");
      setError(true);
    } else if (!regex.test(inputValue)) {
      setMessage("Wrong format");
      setError(true);
    } else {
      setMessage("");
      setError(false);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="name"
        className={`capitalize flex items-center justify-between ${
          error ? "text-red-600" : ""
        }`}>
        Name{" "}
        {error && <span className="font-light text-[13px]">{message}</span>}
      </label>
      <input
        type="text"
        placeholder="Insert your name"
        id="name"
        className={`border outline-none border-[#CFCFCF] px-6 py-3 rounded-xl  w-[15rem] focus:border-primary ${
          error ? "border-red-600" : ""
        }`}
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MyComponent;
