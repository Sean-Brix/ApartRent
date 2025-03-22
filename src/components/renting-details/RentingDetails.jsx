import React from "react";
import { Card, Button } from ".././";
import { Loc, People, Peso } from "../../assets/icons";
function RentingDetails({ UnitName, UnitID, Location, Capacity, Price }) {
  return (
    <>
      <section className="overflow-x-hidden">
        <Card className="p-3" card="sm">
          <img src="SampleProperty.png" />

          <span className="font-rasa line-clamp-1 text-4xl font-bold">
            {UnitName}
          </span>

          <span className="line-clamp-1">
            <img className="mr-2 inline size-10" src={Loc} />
            {Location}
          </span>

          <span className="line-clamp-1">
            <img className="mr-2 inline size-10" src={People} />
            {Capacity} person’s
          </span>

          <span className="font-rasa line-clamp-1 text-4xl font-semibold">
            <img className="mr-2 ml-1.5 inline size-8" src={Peso} />
            {Price}
            <span className="text-2xl opacity-80">montly</span>
          </span>

          <section className="flex gap-3">
            <Button className="grow-1 py-2 leading-6" bgColor="secondary">
              Rent now
            </Button>
            <Button
              route="/ApartRent/SeeFull"
              className="grow-1 py-2 leading-6 text-white"
              bgColor="primary"
            >
              See Full
            </Button>
          </section>
        </Card>
      </section>
    </>
  );
}

export default RentingDetails;
