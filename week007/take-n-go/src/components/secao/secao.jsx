import PropTypes from "prop-types";
import Pratos from "../pratos/pratos";
import React from "react";
import json from "../../../public/data.json";
import { Card } from "../renderCard/renderizaCard";
import { SubSecao } from "../subsecao/subSecao";

export const Secao = ({ nome, produtos, subSecao }) => {
  console.log(produtos);
  return (
    <div>
      <div>
        <h2>{nome}</h2>
        <hr />
      </div>
      {subSecao?.lenght > 0 ? (
        subSecao.map((sub, index) => (
          <SubSecao key={index} produtos={produtos} subSecao={sub} />
        ))
      ) : (
        <Card produtos={produtos} />
      )}
    </div>
  );
};

Secao.propTypes = {
  nomeSecao: PropTypes.string.isRequired,
  subSecao: PropTypes.string,
};

export default Secao;
