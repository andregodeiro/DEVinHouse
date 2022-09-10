export const MainContent = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            src="https://i.postimg.cc/KcRQ5778/knowledge-DB-readme.png"
            alt="logo do site"
          />
        </div>
      </div>

      <div className="stats">
        <div className="stotal">
          <div>Total</div>
          <div id="stotal">00</div>
        </div>
        <div className=" sfront">
          <div>FrontEnd</div>
          <div id="sfront">00</div>
        </div>
        <div className="sback">
          <div>BackEnd</div>
          <div id="sback">00</div>
        </div>
        <div className="sfull">
          <div>FullStack</div>
          <div id="sfull">00</div>
        </div>
        <div className="sfull">
          <div>SoftSkill</div>
          <div id="ssoft">00</div>
        </div>
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

      <div className="containerCards">
        <ul className="card" id="cards"></ul>
      </div>
    </>
  );
};
