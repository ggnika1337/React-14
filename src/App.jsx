import { useContext } from "react";
import "./App.css";
import Bar, { BurgerContext } from "./components/__molecules/Bar/Bar";

function App() {
  const background = useContext(BurgerContext);
  return (
    <>
      <div className="container flex px-[16px] flex-col items-center">
        <Bar />
      </div>
    </>
  );
}

export default App;
