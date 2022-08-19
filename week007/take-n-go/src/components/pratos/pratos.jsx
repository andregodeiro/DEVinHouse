import PropTypes from "prop-types";

export const Pratos = ({ prato }) => {
  return (
    <div className="cardPrato">
      <img src={prato.imagem} alt="" />
      <p>{prato.nome}</p>
      <p>{prato.descricao}</p>
      <p> R$ {prato.valor}</p>
      <p>{prato.preparo}</p>
    </div>
  );
};

// Pratos.propTypes = {
//   prato: PropTypes.shape({
//     imagem: PropTypes.string, //coloquei object porém o console me retornou que deveria ser uma string?
//     nome: PropTypes.string.isRequired,
//     descricao: PropTypes.string.isRequired,
//     valor: PropTypes.number.isRequired,
//     preparo: PropTypes.number.isRequired,
//   }),
// };

export default Pratos; //export default é necessário para renderizar as proptypes
