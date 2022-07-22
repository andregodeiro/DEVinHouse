const convidados = [
  {
    nome: "André",
    sobrenome: "Godeiro",
    idade: 24,
    setor: "Camarote",
  },
  {
    nome: "Jax",
    sobrenome: "Teller",
    idade: 35,
    setor: "Pista",
  },
  {
    nome: "Marshall",
    sobrenome: "Eriksen",
    idade: 43,
    setor: "Camarote",
  },
  {
    nome: "Jesse",
    sobrenome: "Pinkman",
    idade: 38,
    setor: "Arquibancada",
  },
  {
    nome: "Chibs",
    sobrenome: "Telford",
    idade: 47,
    setor: "Arquibancada",
  },
  {
    nome: "Abel",
    sobrenome: "Teller",
    idade: 15,
    setor: "Pista",
  },
];

function liberarBebidas(array) {
  let listaOpen = [];

  array.forEach((idade, i) => {
    listaOpen.push(array[i]);
    if (convidados[i].idade >= 18) {
      listaOpen[i].openBar = true;
      listaOpen[i].sobrenome = listaOpen.sobrenome + " 🍹";
    } else {
      listaOpen[i].openBar = false;
      listaOpen[i].sobrenome = listaOpen.sobrenome + " ⛔";
    }
  });
  return listaOpen;
}

let listaBebidas = liberarBebidas(convidados);
console.log(listaBebidas);

function separarCamarote(lista) {
  var listaFiltrada = Object.values(convidados).filter(
    (objeto) => objeto.setor === "Camarote"
  );
  return listaFiltrada;
}

let listaCamarote = separarCamarote(liberarBebidas);

console.log(listaCamarote);

function separarPista(lista) {
  var listaFiltrada = Object.values(convidados).filter(
    (objeto) => objeto.setor === "Pista"
  );
  return listaFiltrada;
}

let listaPista = separarPista(liberarBebidas);

console.log(listaPista);

function separarArquibancada(lista) {
  var listaFiltrada = Object.values(convidados).filter(
    (objeto) => objeto.setor === "Arquibancada"
  );
  return listaFiltrada;
}

let listaArquibancada = separarArquibancada(liberarBebidas);

console.log(listaArquibancada);

const mostrarCamarote = document.getElementById("listaCamarote");
const mostrarPista = document.getElementById("listaPista");
const mostrarArquibancada = document.getElementById("listaArquibancada");

let camaroteLi = listaCamarote.forEach((convidados, i) => {
  let item = document.createElement("li");
  let convidado = listaCamarote[i].nome + " " + listaCamarote[i].sobrenome;
  item.textContent = convidado;
  mostrarCamarote.appendChild(item);
});

let pistaLi = listaPista.forEach((convidados, i) => {
  let item = document.createElement("li");
  let convidado = listaPista[i].nome + " " + listaPista[i].sobrenome;
  item.textContent = convidado;
  mostrarPista.appendChild(item);
});

let arquibancadaLi = listaArquibancada.forEach((convidados, i) => {
  let item = document.createElement("li");
  let convidado =
    listaArquibancada[i].nome + " " + listaArquibancada[i].sobrenome;
  item.textContent = convidado;
  mostrarArquibancada.appendChild(item);
});
