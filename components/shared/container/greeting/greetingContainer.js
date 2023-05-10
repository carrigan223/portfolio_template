import React from "react";

const GreetingContainer = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-1/2 border rounded shadow-lg h-1/2">
        <span className="flex items-center justify-center w-full h-full font-mono text-xl font-extrabold text-center text-purple-600">
          {text}
        </span>
      </div>
    </div>
  );
};

export default GreetingContainer;
