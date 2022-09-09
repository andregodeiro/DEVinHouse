export const Home = () => {
  return (
    <div className="page">
      <div className="header">
        <div>
          <img
            src="https://i.postimg.cc/KcRQ5778/knowledge-DB-readme.png"
            alt="logo do site"
          />
        </div>
      </div>

      <form id="formulario" action="">
        <div className="formulario">
          <div className="titulo">
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              minLength={4}
              maxLength="64"
              required
            />
          </div>

          <div className="skill">
            <label htmlFor="linguagem">Linguagem/Skill:</label>
            <input
              type="text"
              id="linguagem"
              minLength={4}
              maxLength={16}
              required
            />
          </div>

          <div className="categoria">
            <label htmlFor="categoria">Categoria:</label>
            <input
              type="text"
              name="dropdown"
              id="categoria"
              list="categorias"
            />
            <datalist id="categorias">
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="SoftSkill">SoftSkill</option>
            </datalist>
          </div>

          <div className="descricao">
            <label htmlFor="linguagem">Descrição:</label>
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              minLength={4}
              maxLength={512}
              required
            ></textarea>
          </div>

          <div className="video">
            <label htmlFor="video" id="videoYT">
              Vídeo do YouTube:
            </label>
            <input type="text" id="video" />
          </div>

          <div className="botao">
            <button type="reset" className="limpar">
              Limpar
            </button>
            <button id="salvar" type="submit" className="salvar">
              Salvar
            </button>
          </div>
        </div>
      </form>

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
    </div>
  );
};
