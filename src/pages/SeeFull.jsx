import React from "react";
import { useState } from "react";
import { Nav, Header, FullDetail, RentNow } from "../components";

import { SeeDetail } from "../MockData/Details";
function Landing() {
  const [detail, setDetail] = useState(SeeDetail);

  const [visible, setvisible] = useState(false);
  const [show, setShow] = useState(false);

  const click = () => {
    setvisible((prev) => !prev);
  };

  const Modal = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Header ToggleMenu={click}></Header>
      <Nav
        visible={visible ? "translate-x-[0]" : "translate-x-[-15rem] "}
      ></Nav>

      <RentNow
        Clickhandler={Modal}
        ShowModal={
          show
            ? "translate-x-[0] md:translate-x-[3rem]"
            : "translate-x-[-50rem] "
        }
      ></RentNow>

      {detail.map((Unit) => (
        <FullDetail
          ClickHandler={Modal}
          key={Unit.id}
          UnitID={Unit.id}
          Apartment={Unit.Apartment}
          Location={Unit.Location}
          Price={Unit.Price}
          OwnerName={Unit.OwnerName}
        />
      ))}
    </>
  );
}

export default Landing;
