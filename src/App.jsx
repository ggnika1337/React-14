import { useContext, useReducer, useState } from "react";
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
  const [added, setAdded] = useState();
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });
  const [count, setCount] = useState();
  const [isShown, setIsShown] = useState(() => {
    if (state.quantity === 0) {
      return false;
    } else {
      return true;
    }
  });
  return (
    <>
      <div className="container flex px-[16px] flex-col items-center gap-[50px] relative max-md:px-[0px] max-md:gap-0">
        <Bar
          isShown={isShown}
          Count={state.quantity}
          TrashClick={() => {
            setIsShown(false);
          }}
          Count={state.quantity}
        />
        <Product
          Count={state.quantity}
          Click={() => {
            localStorage.setItem("count", state.quantity);
          }}
          Plus={() => {
            dispatch({ type: "increment" });
          }}
          Minus={() => {
            dispatch({ type: "decrement" });
          }}
        />
      </div>
    </>
  );
}

export default App;
