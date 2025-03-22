import React from "react";
import { Link } from "react-router-dom";
import { Input, Card, Button } from "../components";
function Signup() {
  return (
    <>
      <main className="overflow-x-hidden; flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="font-merienda mb-15 text-center text-6xl font-extrabold text-[#0C2D4B]">
          ApartRent
        </h1>
        <h2 className="font-merienda mb-10 text-center text-xl font-extrabold text-[#0C2D4B] drop-shadow-lg">
          Simple. Smart. Rent.
        </h2>

        <Card className="px-7 py-13 drop-shadow-lg" card="default" bg="default">
          <Input placeholer="Username" type="text" size="default" />

          <Input placeholer="First name" type="text" size="default" />
          <Input placeholer="Last Name" type="text" size="default" />

          <Input placeholer="Password" type="password" size="default" />
          <Input placeholer="Confirm password" type="password" size="default" />

          <Button
            route="/Signin"
            className="mt-7 py-4.5 leading-3 font-semibold text-white"
            bgColor="primary"
            btnSize="default"
          >
            Sign up
          </Button>

          <p className="mt-3 self-center text-[18px] text-nowrap">
            Don’t have an account?&nbsp;
            <Link to="/Signin" className="text-[#0739FF]">
              Sign in
            </Link>
          </p>
        </Card>
      </main>
    </>
  );
}

export default Signup;
