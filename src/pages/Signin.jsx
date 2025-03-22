import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Card, Button, Alert } from "../components";
function Signin() {
  const [visible, setvisible] = useState("hidden");

  const click = () => {
    setvisible((prev) => (prev === "hidden" ? "block" : "hidden"));
  };
  return (
    <>
      <main className="overflow-x-hidden; flex h-screen w-screen flex-col items-center justify-center">
        <Alert clickHandler={click} hidden={visible}>
          what
        </Alert>
        <h1 className="font-merienda mb-15 text-center text-6xl font-extrabold text-[#0C2D4B]">
          ApartRent
        </h1>
        <h2 className="font-merienda mb-10 text-center text-xl font-extrabold text-[#0C2D4B] drop-shadow-lg">
          Simple. Smart. Rent.
        </h2>

        <Card className="px-7 py-13 drop-shadow-lg" card="default" bg="default">
          <Input placeholer="Username or phone" type="text" size="default" />
          <Input placeholer="Password" type="password" size="default" />

          <Button
            clickHandler={click}
            route="/ApartRent"
            className="mt-7 py-4.5 leading-3 font-semibold text-white"
            bgColor="primary"
            btnSize="default"
          >
            Sign in
          </Button>

          <p className="mt-3 self-center text-[18px] text-nowrap">
            Don’t have an account?&nbsp;
            <Link to="/Signin/Signup" className="text-[#0739FF]">
              Sign up
            </Link>
          </p>
        </Card>
      </main>
    </>
  );
}

export default Signin;
