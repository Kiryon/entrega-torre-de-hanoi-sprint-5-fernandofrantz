// funcrion adcElement() {
//     let createDiv = document.createElement("div");
//     ler newContent = document.createElement("div", "div");
//     createDiv.appendChild(newContent);    

//     let divAtual = document.getElementById("geral");
//     document.body.insertBefore(createDiv, divAtual);
// }
// adcElement();

document.body.onload = adcElemento;

function adcElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("geral");
  document.body.insertBefore(divNova, divAtual);
}
