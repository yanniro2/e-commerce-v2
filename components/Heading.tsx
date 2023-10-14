import React, { FC } from "react";

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="w-screen h-[15rem] bg-black mt-[5rem]">
      <div className="container h-full mx-auto text-center flex items-center justify-center">
        <h1 className="h2 text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
