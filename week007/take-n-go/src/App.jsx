import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { Menu } from "./components/menu/menu";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Menu />
    </div>
  );
}

export default App;
