import logo from "../img/take-n-go.png";
import "../navbar/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="take 'n go" />
      <button className="btnMenu">Cardápio</button>
    </div>
  );
};
