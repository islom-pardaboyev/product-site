import { createContext, useEffect, useReducer, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import toast from "react-hot-toast";

export const Context = createContext();
const savedProds = [];

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

export function MainContext({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  function reduce(state, action) {
    switch (action.type) {
      case ACTIONS.ADD:
        const item = products.find((item) => item.id === action.payload);
        if (item && !state.some((savedItem) => savedItem.id === item.id)) {
          toast.success("Successfully Added!");
          return [...state, item];
        } else {
          toast.error("This Product is already added!");
          return [...state];
        }
      case ACTIONS.REMOVE:
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reduce, savedProds);

  useEffect(() => {
    useAxios()
      .get("products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        showSideBar,
        setShowSideBar,
        products,
        isLoading,
        state,
        ACTIONS,
        dispatch,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
}