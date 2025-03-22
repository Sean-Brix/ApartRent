import React from "react";
import Home from "../../assets/icons/Home.svg";
import List from "../../assets/icons/AddProperty.svg";
import Property from "../../assets/icons/OwnerList.svg";
import { Button } from "../index";
import { Link, useLocation } from "react-router-dom";

function Nav({ children, visible, clickProperty }) {
  const location = useLocation();
  return (
    <>
      <main
        className={`${visible} absolute z-10 space-y-5 transition-transform duration-500 md:fixed md:top-0 md:translate-x-0`}
      >
        <nav
          className={`flex h-100 flex-col gap-7 bg-[#0C2D4B] px-2 py-3 tracking-wide md:h-lvh`}
        >
          {location.pathname === "/OwnerList" && (
            <h1 className="font-merienda hidden p-3 text-center text-4xl font-extrabold text-white md:block">
              Owner list
            </h1>
          )}
          {location.pathname === "/ApartRent" && (
            <>
              <h1 className="font-merienda hidden p-3 text-center text-4xl font-extrabold text-white md:block">
                ApartRent
              </h1>
            </>
          )}

          {location.pathname === "/ApartRent/SeeFull" && (
            <>
              <h1 className="font-merienda hidden p-3 text-center text-4xl font-extrabold text-white md:block">
                Full Details
              </h1>
            </>
          )}

          {location.pathname !== "/" && (
            <>
              <Link
                to="/ApartRent"
                className="flex items-center justify-start gap-2 rounded-sm p-2 hover:border-1 hover:border-white"
              >
                <img className="inline size-6" src={Home} alt="" />
                <span className="font-rasa inline text-xl text-white">
                  Home
                </span>
              </Link>

              {location.pathname === "/OwnerList" && (
                <button
                  onClick={clickProperty}
                  className="flex cursor-pointer items-center justify-start gap-2 rounded-sm p-2 hover:border-1 hover:border-white"
                >
                  <img className="inline size-7" src={Property} alt="" />
                  <span className="font-rasa inline text-xl text-nowrap text-white">
                    Add propeties
                  </span>
                </button>
              )}
              <Link
                to="/OwnerList"
                className="flex items-center justify-start gap-2 rounded-sm p-2 hover:border-1 hover:border-white"
              >
                <img className="inline size-6" src={List} alt="" />
                <span className="font-rasa inline text-xl text-nowrap text-white">
                  Owner list
                </span>
              </Link>
            </>
          )}

          {location.pathname === "/" && (
            <>
              <h1 className="font-merienda hidden p-3 text-center text-4xl font-extrabold text-white md:block">
                ApartRent
              </h1>
              <section className="mt-auto flex flex-col">
                <Button
                  route="/Signin"
                  btnSize="sm"
                  bgColor="tertiary"
                  className="mt-3 py-2.5 leading-3 text-white"
                >
                  Sign in
                </Button>

                <Button
                  route="/Signin/Signup"
                  btnSize="sm"
                  bgColor="tertiary"
                  className="mt-3 py-2.5 leading-3 text-white"
                >
                  Sign up
                </Button>
              </section>
            </>
          )}

          {location.pathname !== "/" && (
            <section className="mt-auto flex flex-col">
              <p className="font-rasa line-clamp-2 w-32 text-xl text-nowrap text-white before:opacity-75 before:content-['Name:_']">
                Israel
              </p>
              <hr className="text-white" />
              <Button
                route="/"
                btnSize="sm"
                bgColor="tertiary"
                className="mt-3 py-2.5 leading-3 text-white"
              >
                Logout
              </Button>
            </section>
          )}
        </nav>
      </main>
    </>
  );
}

export default Nav;
