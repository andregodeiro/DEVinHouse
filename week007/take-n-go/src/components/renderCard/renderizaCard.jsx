import { Pratos } from "../pratos/pratos";

export const Card = ({ produtos }) => {
  console.log(produtos, "aqui");
  return (
    <ul>
      {produtos.map((produto) => {
        <li key={produto.id}>
          <Pratos prato={produto} />
        </li>;
      })}
    </ul>
  );
};
