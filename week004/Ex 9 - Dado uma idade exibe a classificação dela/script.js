let txtInput = document.getElementById("inputAge");
const button = document.getElementById("button");
const titulo = document.getElementById("titulo");

const jovem = () => {
  document.querySelector("#titulo").innerHTML = `
  <h3> Jovem! </h3>
  <img src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-negro-bonito-em-branco_285396-365.jpg?w=2000" alt="foto de um jovem" width="500px">
  `;
};

const adulto = () => {
  document.querySelector("#titulo").innerHTML = `
  <h3> Adulto! </h3>
  <img src="https://cdn.create.vista.com/api/media/medium/223484138/stock-photo-close-portrait-smiling-adult-woman?token=" alt="foto de um adulto" width="500px">
  `;
};

const idoso = () => {
  document.querySelector("#titulo").innerHTML = `
  <h3> Idoso! </h3>
  <img src="https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_quem-sao-e-como-vivem-os-idosos-do-brasil1.jpg?quality=70&strip=info&w=960" alt="foto de um idoso" width="500px">
  `;
};

function classificar(value) {
  value = txtInput.value;
  if (value.length == 0) {
    alert("Insira uma idade!");
  } else if (value <= 15) {
    jovem();
  } else if (value > 15 && value <= 64) {
    adulto();
  } else if (value >= 65) {
    idoso();
  }
}
