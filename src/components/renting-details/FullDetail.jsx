import React from "react";
import { Card, Button } from "..";
import { Loc, Peso, Owner, CallIcon } from "../../assets/icons";
import { unitdetail } from "../../MockData/Details";
import Sample from "/public/SampleProperty.png";

import { useState } from "react";
function FullDetail({
  Apartment,
  Location,
  Price,
  OwnerName,
  UnitID,
  UnitDetail,
  ClickHandler,
}) {
  const [details, setDetails] = useState(unitdetail);
  return (
    <>
      <main className="space-y-10 overflow-x-hidden p-3 md:ml-64.5 md:justify-start lg:ml-65 lg:grid lg:grid-rows-[40rem_1fr]">
        <section className="col-span-2 lg:row-start-1 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 lg:col-start-1 lg:row-start-1">
            <img
              className="w-[100%] object-cover lg:h-[100%]"
              src={Sample}
              alt=""
            />
            <img
              className="col-start-1 row-start-2 w-[100%] object-cover lg:h-[100%]"
              src={Sample}
              alt=""
            />
            <img
              className="object-fll col-start-2 row-span-2 h-[100%]"
              src={Sample}
              alt=""
            />
          </div>

          <aside className="lg:col-start-2 lg:row-start-1">
            <article className="font-rasa mt-4.5 flex flex-col gap-6.5 text-3xl md:gap-12 md:leading-9 lg:mt-0 lg:gap-y-15 lg:text-3xl">
              <h1 className="font-bold lg:text-7xl">{Apartment}</h1>
              <article className="flex items-center justify-start gap-3">
                <img className="object-center lg:size-10" src={Loc}></img>
                <p className="text-[1rem] text-[#555555] lg:text-2xl">
                  {Location}
                </p>
                <span className="self-end text-2xl"></span>
              </article>

              <article className="flex items-center gap-3">
                <img className="object-center lg:size-10" src={Peso}></img>
                <p className="font-semibold lg:text-4xl">{Price}</p>
                <span className="self-end text-2xl text-[#555555] lg:text-4xl">
                  montly
                </span>
              </article>

              <article className="flex items-center gap-3">
                <img className="object-center lg:size-10" src={Owner}></img>
                <span className="font-semibold lg:text-4xl">Owner: </span>

                <span className="text-2xl lg:text-2xl">{OwnerName}</span>
              </article>
            </article>

            <div className="relative mt-10 w-70 place-self-center lg:mt-20 lg:w-100">
              <Button
                clickHandler={ClickHandler}
                bgColor="primary"
                className="grow-1 py-2 text-2xl text-white"
              >
                Rent Now
              </Button>
              <img
                className="absolute top-2.5 right-5 size-7 origin-center object-center"
                src={CallIcon}
                alt=""
              />
            </div>
          </aside>
        </section>
        <section className="lg:row-start-2">
          {details.map((unit) => (
            <>
              <h1 className="mb-5 text-center text-2xl leading-5 font-bold text-[#383838] md:text-left lg:col-start-1 lg:row-start-2 lg:text-5xl">
                DETAILS
              </h1>

              <article className="flex flex-col items-center gap-3 md:mt-10 md:flex-row md:items-start md:justify-center md:gap-30 lg:mt-30 lg:justify-start lg:space-x-30 lg:text-3xl">
                <section className="flex flex-col items-center gap-3 lg:gap-15">
                  <h1 className="">Offer Type</h1>
                  <p className="font-bold">{unit.Offer}</p>
                  <hr className="w-42 text-[#cccccc] md:w-50 lg:w-100" />
                  <h1 className="">Unit Type</h1>
                  <p className="font-bold">{unit.Type}</p>
                  <hr className="w-42 text-[#cccccc] md:w-50 lg:w-100" />
                  <h1 className="">Subdivision Name</h1>
                  <p className="font-bold">{unit.Brgy}</p>
                  <hr className="w-42 text-[#cccccc] md:w-50 lg:w-100" />
                </section>
                <section className="flex flex-col items-center gap-3 lg:gap-15">
                  <h1 className="">Bedroom's</h1>
                  <p className="font-bold">{unit.Rooms}</p>
                  <hr className="w-42 text-[#cccccc] md:w-50 lg:w-100" />
                  <h1 className="">Bathrooms</h1>
                  <p className="font-bold">{unit.Cr}</p>
                  <hr className="w-42 text-[#cccccc] md:w-50 lg:w-100" />
                </section>
              </article>
            </>
          ))}
        </section>
      </main>
    </>
  );
}

export default FullDetail;
