export const Sidebar = () => {
  return (
    <div className="sidebar">
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
    </div>
  );
};
