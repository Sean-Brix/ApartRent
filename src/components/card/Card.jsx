import React from "react";

function Card({ children, className, card, bg }) {
  const cardSize = {
    default: "w-90 md:w-100",
    sm: "w-90 md:w-100",
    md: "w-200",
  };
  const cardBg = {
    white: "bg-white",
    default: "bg-[#d9d9d936]",
    border: "border-1 border-black",
    none: "",
  };
  return (
    <main
      className={`${className} ${cardSize[card]} ${cardBg[bg]} font-rasa flex flex-col gap-5 self-center rounded-md text-2xl tracking-widest drop-shadow-lg`}
    >
      {children}
    </main>
  );
}

export default Card;
