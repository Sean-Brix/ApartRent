import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  className = "",
  route = "",
  bgColor,
  btnSize,
  clickHandler,
  currentPath,
}) {
  const bg = {
    primary: "bg-[#0C2D4B]",
    secondary: "border-1 border-black",
    tertiary: "border-1 border-white",
  };
  const size = {
    default: "w-1/2 w-50",
    sm: "w-34",
    md: "w-70",
  };

  const hiddenRoutes = ["/"];

  if (hiddenRoutes.includes(currentPath)) return null;

  return (
    <Link
      to={route}
      className={`${className} ${bg[bgColor]} ${size[btnSize]} font-rasa flex cursor-pointer justify-center self-center rounded-md rounded-b-md outline-0 drop-shadow-xl`}
    >
      <button onClick={clickHandler} className="grow-1 cursor-pointer">
        {children}
      </button>
    </Link>
  );
}

export default Button;
