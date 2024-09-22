import React from "react";

function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-black border-2 rounded-md bg-black text-white px-7 py-2">
      {children}
    </div>
  );
}

export default Button;
