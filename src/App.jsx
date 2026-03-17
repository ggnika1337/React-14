import { useContext } from "react";
import "./App.css";
import Bar from "./components/__molecules/Bar/Bar";
import Product from "./components/__organisms/Product/Product";

function App() {
  return (
    <>
      <div className="container flex px-[16px] flex-col items-center gap-[50px] relative">
        <Bar />
        <Product />
      </div>
    </>
  );
}

export default App;
