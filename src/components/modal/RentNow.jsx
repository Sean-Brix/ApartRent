import React from "react";
import { Button, Card } from ".././";
import Submit from "./assets/Submit.svg";
import { SubmitRent } from "../../MockData/Details";
import Exit from "./assets/modalExit.svg";
import { useState } from "react";

function RentNow({ Clickhandler, ShowModal }) {
  const [detail, setDetail] = useState(SubmitRent);

  return (
    <>
      <Card
        bg="white"
        className={`${ShowModal} absolute top-20 z-100 duration-500 md:top-10`}
      >
        <img
          onClick={Clickhandler}
          className="absolute top-5 right-5 z-100 cursor-pointer"
          src={Exit}
          alt=""
        />
        <article className="mt-15 flex w-full flex-col justify-center space-y-5 p-5">
          <h1 className="text-3xl font-semibold">
            3BR Apartment For Rent in EGI Homes 4 person’s
          </h1>

          {detail.map((unit) => (
            <>
              <article className="md:flex md:justify-center md:gap-14">
                <section className="mt-10 flex flex-col items-center gap-5 leading-8">
                  <h1 className="font-rasa text-center text-xl">
                    Occupant Name
                  </h1>
                  <p className="font-bold">{unit.OccupantName}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">
                    Occupant Number
                  </h1>
                  <p className="font-bold">{unit.OccupantNum}</p>
                  <hr className="w-64 text-[#bbbbbb]" />

                  <h1 className="font-rasa text-center text-xl">
                    Renting Offer
                  </h1>
                  <p className="font-bold">{unit.Offer}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">
                    Property Type
                  </h1>
                  <p className="font-bold">{unit.Type}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">Capaity</h1>
                  <p className="font-bold">
                    {unit.Capacity} <span> People's / Max</span>
                  </p>
                  <hr className="w-64 text-[#bbbbbb]" />
                </section>

                <section className="mt-10 flex flex-col items-center gap-5 leading-8">
                  <h1 className="font-rasa text-center text-xl">Owner Name</h1>
                  <p className="font-bold">{unit.OwnerName}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">
                    Owner Number
                  </h1>
                  <p className="font-bold">{unit.OwnerNum}</p>
                  <hr className="w-64 text-[#bbbbbb]" />

                  <h1 className="font-rasa text-center text-xl">Location</h1>
                  <p className="font-bold">{unit.Brgy}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">Bedrooms</h1>
                  <p className="font-bold">{unit.Rooms}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                  <h1 className="font-rasa text-center text-xl">Bathrooms</h1>
                  <p className="font-bold">{unit.Cr}</p>
                  <hr className="w-64 text-[#bbbbbb]" />
                </section>
              </article>
            </>
          ))}

          <div className="relative col-span-2 flex items-center justify-center md:ml-10">
            <Button
              bgColor="primary"
              className="w-1/1 py-3 text-2xl text-white"
            >
              Submit Renting
            </Button>
            <img className="absolute right-7" src={Submit} alt="" />
          </div>
        </article>
      </Card>
    </>
  );
}

export default RentNow;
