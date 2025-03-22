import React from "react";
import { useState } from "react";
import { Nav, Header, RentingDetails, Input, Main } from "../components";
import { Loc, People, Search } from "../assets/icons";
import { details } from ".././MockData/Details";
function ApartRent() {
  const [detail, setDetail] = useState(details);
  const [visible, setvisible] = useState(false);

  const click = () => {
    setvisible((prev) => !prev);
  };

  return (
    <>
      <Header ToggleMenu={click}></Header>
      <Nav
        visible={visible ? "translate-x-[0]" : "translate-x-[-15rem] "}
      ></Nav>

      {/* Search Section */}
      <section className="relative md:ml-54 lg:ml-50">
        <section className="absolute top-[30%] left-[45%] flex transform-[translate(-50%,_50%)] items-center gap-2 md:top-[40%] md:left-[54%]">
          <Input
            className="font-rasa w-42 border-white bg-[#e7e7e7bb] text-[#000000] placeholder:text-white focus:outline-0 md:py-1 md:text-[1.17rem] lg:w-72"
            placeholer="Current location"
          ></Input>

          <Input
            className="font-rasa w-32 border-white bg-[#e7e7e7bb] text-[#000000] placeholder:text-white focus:outline-0 md:py-1 md:text-[1.17rem] lg:w-62"
            placeholer="Occupant"
          ></Input>
          <img
            className="object-fit size-7 cursor-pointer rounded-sm bg-[#a8a8a8a8] object-fill p-1 md:size-10"
            src={Search}
          />
        </section>
        <img className="w-screen" src="MainPage.png" />

        {/* Sort section */}
        <section className="font-rasa mx-5 my-3 flex h-7 gap-3 text-xl md:ml-5 lg:ml-10">
          <img className="size-7" src={Loc} />
          <select className="w-32 rounded-lg border-1 px-2">
            <option disabled selected>
              Location
            </option>
            <option>Cavite</option>
            <option>Damsa</option>
            <option>Gentri </option>
          </select>

          <img className="size-10" src={People} />
          <select className="w-26 rounded-lg border-1 px-2">
            <option disabled selected>
              person's
            </option>
            <option>1 person</option>
            <option>3 person's</option>
            <option>4 person's</option>
          </select>
        </section>
      </section>
      <main className="flex flex-wrap justify-center md:ml-57 md:justify-start">
        {detail.map((Unit) => (
          <RentingDetails
            key={Unit.id}
            UnitID={Unit.id}
            UnitName={Unit.Apartment}
            Location={Unit.Location}
            Capacity={Unit.Capacity}
            Price={Unit.Price}
          />
        ))}
      </main>
    </>
  );
}

export default ApartRent;
