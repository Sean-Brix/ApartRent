import React from "react";
import Exit from "./assets/modalExit.svg";
import { Button, Input } from ".././";

import { useState } from "react";

function AddProperties({ children, visible, ClickExit }) {
  return (
    <>
      <main
        className={`${visible} absolute top-0 left-0 z-100 flex flex-col items-center justify-around rounded-md bg-[#ffffff] p-5 drop-shadow-md duration-500 md:left-60 md:w-173`}
      >
        <img
          className={`absolute top-4 right-8 size-7 cursor-pointer md:top-2 md:right-2`}
          src={Exit}
          alt=""
          onClick={ClickExit}
        />
        <h1 className="font-merienda mt-10 mb-10 text-5xl font-extrabold">
          Add propeties
        </h1>
        <section className="grid gap-2 md:grid-cols-2 md:grid-rows-2">
          <img className="md:size-[100%]" src="SampleProperty.png" alt="" />

          <img
            className="row-start-2 md:size-[100%]"
            src="SampleProperty.png"
            alt=""
          />

          <img
            className="md:col-start-2 md:row-span-2 md:size-[100%] md:object-center"
            src="SampleProperty.png"
            alt=""
          />
        </section>
        <div className="mt-10 flex gap-5">
          <Input className="w-43" type="file"></Input>
          <Button bgColor="secondary" className="font-rasa px-5 py-3 leading-3">
            submit
          </Button>
        </div>
        <h1 className="font-rasa mt-10 ml-5 place-self-start text-4xl font-semibold">
          Property details
        </h1>
        <article className="grid w-full grid-cols-2 grid-rows-2 gap-5 p-5">
          <section className="flex w-82 flex-col items-center gap-3">
            <h1 className="font-rasa text-center text-xl">Property Name</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Owner Name</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Property Capacity</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Offer type</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
          </section>

          <section className="row-start-2 flex w-82 flex-col items-center gap-3 md:col-start-2 md:row-start-1">
            <h1 className="font-rasa text-center text-xl">Owner number</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Property location</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Bedrooms</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
            <h1 className="font-rasa text-center text-xl">Property type</h1>
            <Input outline="default"></Input>
            <hr className="w-64 text-[#bbbbbb]" />
          </section>
          <div className="col-span-2 mb-30 flex items-center justify-center md:ml-10">
            <Button
              bgColor="primary"
              className="w-1/2 py-2 text-2xl text-white"
            >
              Add Property
            </Button>
          </div>
        </article>
      </main>
    </>
  );
}

// ${hidden}
export default AddProperties;
