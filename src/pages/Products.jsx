import React, { useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Context } from "../context/Context";

function Products() {
  const { products, setProducts, isLoading, state, ACTIONS, dispatch } =
    useContext(Context);

  return (
    <section className="bg-primary h-screen overflow-y-auto">
      <div className="container my-5 ">
        {isLoading ? (
          <div className="fixed top-0 left-0 w-screen h-screen duration-300 backdrop-blur-md  flex items-center justify-center">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#fff"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            {products.map((item, index) => (
              <div
                className="col-span-3 bg-[#373A40] p-3 rounded-md"
                key={index + 1}
              >
                <img
                  src={item.images[0]}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x600?text=Not+Found";
                  }}
                  className="rounded-md "
                  alt={item.title}
                />
                <div className="mt-3">
                  <h1 className="font-medium text-2xl line-clamp-2">{item.title}</h1>
                  <div className="flex  items-center justify-between">
                    <h1 className="font-bold">${item.price}</h1>
                    <button
                      onClick={() =>
                        dispatch({ type: ACTIONS.ADD, payload: item.id })
                      }
                      className="bg-primary-5 hover:opacity-80 px-4 py-1 rounded-md"
                    >
                      Save
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
