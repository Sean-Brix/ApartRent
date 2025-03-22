import React from "react";
import Exit from "./assets/AlertExit.svg";
import Loading from "./assets/AlertLoading.svg";
function Alert({ children, hidden, ToggleExit }) {
  return (
    <>
      <main
        className={`${hidden} absolute top-93 left-4 z-50 flex size-90 flex-col items-center justify-around rounded-md bg-[#0C2D4B] drop-shadow-md md:left-82`}
      >
        <img
          onClick={ToggleExit}
          className={`${hidden} absolute top-2 right-2 size-7 cursor-pointer`}
          src={Exit}
          alt=""
        />
        <h1 className="font-merienda text-5xl text-white"> ALERT!!!!</h1>
        <p className="font-rasa w-50 text-center text-2xl text-white">
          {children}
        </p>
        <img className="size-10 animate-spin" src={Loading} alt="" />
      </main>
    </>
  );
}

export default Alert;
