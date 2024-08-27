import React, { useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Context } from "../context/Context";
import { Input } from "antd";

function Products() {
  const { products, setProducts, isLoading, dispatch, ACTIONS } =
    useContext(Context);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((item) => item.category?.name)),
    ];
    setCategories(uniqueCategories);
    setFilteredProducts(products);
  }, [products]);

  function filterByCategoryName(e) {
    const selectedValue = e.target.value;
    if (selectedValue === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (item) => item.category?.name === selectedValue
      );
      setFilteredProducts(filtered);
    }
  }

  function filterByName(e) {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  }

  return (
    <section className="bg-primary h-screen overflow-y-auto">
      <div className="container flex mt-4 items-center justify-between">
        <select
          name=""
          onChange={filterByCategoryName}
          className="text-black w-full max-w-xs p-2 rounded-md"
          id=""
        >
          <option value="" defaultValue>
            Choose Category
          </option>
          {categories.map((item, index) => (
            <option key={index + 1} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Input
          size="large"
          className={"w-[400px]"}
          onChange={filterByName}
          placeholder="Find By Name"
        />
      </div>
      <div className="container my-5">
        {isLoading ? (
          <div className="fixed top-0 left-0 w-screen h-screen duration-300 backdrop-blur-md flex items-center justify-center">
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
            {filteredProducts.map((item, index) => (
              <div
                className="col-span-3 bg-[#373A40] flex flex-col justify-between p-3 rounded-md"
                key={index + 1}
              >
                <div>
                  <img
                    src={item.images[0]}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x600?text=Not+Found";
                    }}
                    className="rounded-md "
                    alt={item.title}
                  />
                  <p className="text-md mt-2">{item.title}</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm">{item.category?.name}</p>
                  {`${new Date(item.creationAt).toLocaleString('en-GB', { timeZone: 'UTC' })}`}
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl">${item.price}</p>
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
