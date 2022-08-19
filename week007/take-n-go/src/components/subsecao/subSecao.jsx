import { Card } from "../renderCard/renderizaCard";

export const SubSecao = ({ produtos, subSecao }) => {
  const pratosFiltrados = produtos.filter((prod) => prod.subsecao === subSecao);

  return (
    <div>
      <div>
        <h3>{SubSecao}</h3>
      </div>

      <Card pratos={pratosFiltrados} />
    </div>
  );
};
