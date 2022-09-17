export const Filter = () => {
  return (
    <div>
      <div className="busca">
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <button type="reset" className="limparBusca">
          <a href="">
            <img
              src="./source/img/icons/limpar.png"
              alt="botão limpar"
              className="botaoLimpar"
            />
          </a>
        </button>
      </div>
    </div>
  );
};
