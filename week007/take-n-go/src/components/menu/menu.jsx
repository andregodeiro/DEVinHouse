import "../menu/menu.css";
import Secao from "../secao/secao";
import json from "../../../public/data.json";

export const Menu = () => {
  const subSecoesEntradas = new Set(json.entradas.map((i) => i.subSecao));

  return (
    <div className="cardapioPrincipal">
      <Secao
        nomeSecao={"Entradas"}
        produtos={json.entradas}
        subSecao={json.subsecao}
      />
    </div>
  );
};
