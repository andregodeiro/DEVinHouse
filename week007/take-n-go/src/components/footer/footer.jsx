import logo from "../img/take-n-go.png";
import "../footer/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="containerCima">
        <div className="contatoFooter">
          <p>Rua das Américas | 123 | ABC | Natal - RN </p>
          <p> (84) 2020 - 8383</p>
          <p>contato@takengo.dev.br</p>
        </div>
        <div className="redesFooter">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Trip Advisor</a>
        </div>
        <div className="avisosFooter">
          <p>Horário de Funcionamento:</p>
          <p>Domingo à Domingo</p>
          <p>09h - 23h</p>
        </div>
      </div>
      <div className="containerBaixo">
        <p>Take 'n Go. Todos os direitos reservados. 2022</p>
      </div>
    </div>
  );
};
