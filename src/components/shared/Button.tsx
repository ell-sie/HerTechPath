import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <div
      className="border-black border-2 rounded-md bg-black text-white px-7 py-2 cursor-pointer" // Added cursor-pointer for better UX
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
