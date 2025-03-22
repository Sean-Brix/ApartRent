import React from "react";
import { useState } from "react";
import { Nav, Header, AddProperties, RentingDetails } from "../components";

import { details } from ".././MockData/Details";

function OwnerListing() {
  const [detail, setDetail] = useState(details);
  const [visible, setvisible] = useState(false);
  const [Navlink, setNavlink] = useState(false);

  const click = () => {
    setvisible((prev) => !prev);
  };

  const ClickNavlink = () => {
    setNavlink((prev) => !prev);
  };

  //  hidden={visible ? "translate-x-[0]" : "translate-x-[-15rem] "}
  return (
    <>
      <AddProperties
        ClickExit={ClickNavlink}
        visible={Navlink ? "translate-x-[0]" : "translate-x-[-100rem] "}
      ></AddProperties>

      <Header ToggleMenu={click}></Header>
      <Nav
        clickProperty={ClickNavlink}
        visible={visible ? "translate-x-[0]" : "translate-x-[-15rem] "}
      ></Nav>

      <section className="font-rasa my-3 flex h-7 space-x-3 text-xl md:ml-70 lg:ml-68">
        <h1>Property</h1>
        <select className="w-50 rounded-lg border-1 px-2">
          <option disabled selected>
            Sort by location
          </option>
          <option>Cavite</option>
          <option>Damsa</option>
          <option>Gentri </option>
        </select>

        <h1>Status</h1>
        <select className="w-26 rounded-lg border-1 px-2">
          <option disabled selected>
            Status
          </option>
          <option>Rented</option>
          <option>Vacant</option>
        </select>
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

export default OwnerListing;
