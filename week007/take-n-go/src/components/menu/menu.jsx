import PropTypes from "prop-types";
import Pratos from "../pratos/pratos";
import "../menu/menu.css";
import ribs from "../pratos/img/ribs.jpg";
import shrimp from "../pratos/img/shrimp.jpg";
import hotwings from "../pratos/img/hot-wings.jpg";

export const Menu = () => {
  return (
    <div className="cardapioPrincipal">
      <Pratos
        prato={{
          imagem: ribs,
          nome: "Ribs on the barbie",
          descricao: "deliciosas costelinhas",
          valor: 35,
          preparo: 45,
        }}
      />
      <Pratos
        prato={{
          imagem: shrimp,
          nome: "Hot Spicy Shrimp",
          descricao: "Camarões apimentados",
          valor: 50,
          preparo: 35,
        }}
      />
      <Pratos
        prato={{
          imagem: hotwings,
          nome: "Buffalo Wings",
          descricao: "Asinhas de frango apimentadas",
          valor: 35,
          preparo: 45,
        }}
      />
    </div>
  );
};
