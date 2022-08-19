import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import Secao from "./components/secao/secao";
import produtos from "../public/data.json";

function App() {
  return (
    <div className="principal">
      <Navbar />
      <Secao produtos={produtos.principais} nomeSecao={"Entradas"} />
      <Secao produtos={produtos.bebidas} nomeSecao={"Entradas"} />
      <Footer />
    </div>
  );
}

export default App;
