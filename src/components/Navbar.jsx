import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

function Navbar() {
  const { showSideBar, setShowSideBar, state } = useContext(Context);

  return (
    <nav className="shadow-sm sticky top-0 bg-primary shadow-white p-5">
      <div className="container flex items-center justify-between">
        <h1 className="font-bold text-3xl font-amsterdam tracking-widest">
          React Shop
        </h1>
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink to="/" className="font-medium text-xl">
              Products
            </NavLink>
          </li>
          <li
            onClick={() => setShowSideBar(!showSideBar)}
            className="relative cursor-pointer"
          >
            <SlBasket className="scale-125" />
            <div className="bg-rose-500 text-white w-5 h-5 flex items-center justify-center text-xs font-medium rounded-full absolute -top-1 -right-4">
            {state.length > 9 ? "9+" : state.length}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
