import React from "react";
import { useState } from "react";
import { Nav, Header, RentingDetails, Alert } from "../components";

import { details } from ".././MockData/Details";
function Landing() {
  const [detail, setDetail] = useState(details);

  const [visible, setvisible] = useState(false);

  const click = () => {
    setvisible((prev) => !prev);
  };

  return (
    <>
      <Alert ToggleExit={click} hidden={visible ? "block" : "hidden"}>
        Don't have an account Login first
      </Alert>
      <Header ToggleMenu={click}></Header>
      <Nav
        visible={visible ? "translate-x-[0]" : "translate-x-[-15rem] "}
      ></Nav>
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

export default Landing;
