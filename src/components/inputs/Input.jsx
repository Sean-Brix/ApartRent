import React from "react";

function Input({
  placeholer = "",
  type = "",
  opacity,
  size,
  className,
  outline,
}) {
  const inputSize = {
    default: "py-2.5 leading-3 placeholder:text-[18px]",
    md: "w-200",
  };

  const addModal = {
    default: "bord w-52 border-none outline-1 outline-[#a0a0a0aa]",
  };
  return (
    <>
      <input
        placeholder={placeholer}
        type={type}
        className={` placeholder:opacity-${opacity} ${addModal[outline]} ${className} ${inputSize[size]} rounded-md border-1 px-3.5 placeholder:font-medium placeholder:text-black`}
      />
    </>
  );
}

export default Input;
