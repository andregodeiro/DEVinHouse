import React from "react";
import PropTypes from "prop-types";

export const TipCard = ({ tip }) => {
  const { titulo, linguagem, categoria, descricao, video } = tip;
  return (
    <div>
      <div id="cardInfo">
        <li>
          <h2 id="cardTitulo">{titulo}</h2>
          <div className="cardSkill">
            <p>
              {" "}
              <strong> Linguagem/Skill:</strong>
            </p>
            <span>{linguagem}</span>
          </div>
          <div className="cardCategoria">
            <p>
              {" "}
              <strong>Categoria:</strong>
            </p>
            <span>{categoria}</span>
          </div>
          <div className="cardDescricao">
            <p>{descricao}</p>
          </div>
          <div className="cardBotoes">
            <button id="excluir">
              <img src="./source/img/icons/excluir.png" alt="" />
            </button>
            <button id="editar">
              <img src="./source/img/icons/editar.png" alt="" />
            </button>
            {video && (
              <a href={video} target="_blank">
                <button id="linkVideo">
                  <img src="./source/img/icons/video.png" alt="" />
                </button>
              </a>
            )}
          </div>
        </li>
      </div>
    </div>
  );
};

TipCard.propTypes = {
  tip: PropTypes.shape({
    id: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    categoria: PropTypes.string,
    linguagem: PropTypes.string,
    video: PropTypes.string,
  }),
};

export default TipCard;
