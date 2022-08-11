import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/* <Header /> */}
    </div>
  );
}

export default App;
