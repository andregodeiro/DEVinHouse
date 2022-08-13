import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { Menu } from "./components/menu/menu";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
