"use client";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-2 px-4 focus:outline-none bg-slate-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-semibold text-gray-700 text-2xl">{title}</h2>
      </button>
      {isOpen && <div className="py-2 px-4">{children}</div>}
    </div>
  );
};

export default Accordion;
