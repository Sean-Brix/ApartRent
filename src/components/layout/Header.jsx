import React from "react";
import MenuIcon from "../../assets/icons/menu.svg";
function Header({ ToggleMenu }) {
  return (
    <header className="bg-[#0C2D4B] md:hidden">
      <img
        onClick={ToggleMenu}
        className="absolute top-5 left-5 size-7 cursor-pointer"
        src={MenuIcon}
        alt=""
      />
      <h1 className="font-merienda p-3 text-center text-4xl font-extrabold text-white">
        AparRent
      </h1>
    </header>
  );
}

export default Header;
