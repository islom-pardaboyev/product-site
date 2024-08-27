import React, { useContext } from "react";
import { FaAngleDoubleLeft, FaTrash } from "react-icons/fa";
import { Context } from "../context/Context";

function Sidebar() {
  const { showSideBar, setShowSideBar, state, ACTIONS, dispatch } =
    useContext(Context);

  return (
    <div
      className={`h-screen overflow-y-auto w-[35vw] shadow-md duration-300 shadow-white fixed top-0  bg-primary ${
        showSideBar ? "right-0" : "-right-full"
      }`}
    >
      <div className="p-5 flex items-center justify-between">
        <FaAngleDoubleLeft
          onClick={() => setShowSideBar(!showSideBar)}
          className={"scale-150 cursor-pointer"}
        />
        <h1 className="font-medium text-xl">
          Your Basket ({state.length > 10 ? "9+" : state.length})
        </h1>
      </div>
      <hr />
      <div className="p-5">
        {state.length ? (
          state.map((item, index) => (
            <div
              key={index + 1}
              className="flex gap-7 items-center bg-neutral-600 p-3 justify-between"
            >
              <img
                width={100}
                onError={(e) =>
                  (e.target.src = "https://placehold.co/100x100?text=Not+Found")
                }
                className="rounded-md"
                src={item.images}
                alt=""
              />
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <p className="line-clamp-1">{item.title}</p>
                  <p className="font-bold text-3xl">${item.price}</p>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: ACTIONS.REMOVE, payload: item.id })
                  }
                  className="size-7 rounded-md hover:opacity-70 flex items-center justify-center text-white bg-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="capitalize font-bold text-5xl flex justify-center text-neutral-400">
            empty...
          </p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
