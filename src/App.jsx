import { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import Bar from "./components/__molecules/Bar/Bar";
import Product from "./components/__organisms/Product/Product";

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      quantity: state.quantity + 1,
    };
  } else if (action.type === "decrement") {
    if (state.quantity === 0) {
      return state;
    }
    return {
      quantity: state.quantity - 1,
    };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0,
  );
  const [isShown, setIsShown] = useState(() => {
    if (localStorage.getItem("count") === "0") {
      return false;
    } else if (localStorage.getItem("count") !== "0") {
      return true;
    }
  });
  return (
    <>
      <div className="container flex px-[16px] flex-col items-center gap-[50px] relative max-md:px-[0px] max-md:gap-0">
        <Bar
          showOrange={isShown}
          isShown={isShown}
          Count={count}
          TrashClick={() => {
            setCount(0);
            localStorage.setItem("count", 0);
          }}
        />
        <Product
          Count={state.quantity}
          Click={() => {
            const newCount = count + state.quantity;
            setCount(newCount);
            localStorage.setItem("count", newCount);
          }}
          Plus={() => dispatch({ type: "increment" })}
          Minus={() => dispatch({ type: "decrement" })}
        />
      </div>
    </>
  );
}

export default App;
