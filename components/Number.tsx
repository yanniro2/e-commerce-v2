"use client";


interface NumProps {
  quantity: number;
  noOfItems: number;
  handleDecrement: () => void; // Assuming handleDecrement does not return anything
  handleIncrement: () => void; // Assuming handleIncrement does not return anything
}

const Num: React.FC<NumProps> = ({
  quantity,
  noOfItems,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className="bg-gray p-3 flex items-center gap-5">
      <button
        onClick={handleDecrement}
        disabled={noOfItems === 1}
        className="cursor-pointer p-1 text-black opacity-50 hover:text-primary transition hover:opacity-100">
        -
      </button>
      <span>{noOfItems}</span>
      <button
        onClick={handleIncrement}
        disabled={noOfItems === quantity}
        className="cursor-pointer p-1  text-black opacity-50 hover:text-primary transition hover:opacity-100">
        +
      </button>
    </div>
  );
};

export default Num;
