document.addEventListener("DOMContentLoaded", inserirBotoesComInnerHTML);

function inserirBotoesComInnerHTML(){
  div = document.createElement("div");
  div.style.backgroundColor = "black";
  div.innerHTML = `
  <button onclick="tamanho('x-large')">-</button>
  <button onclick="tamanho('xxx-large')">+</button>
  `;
  document.body.prepend(div);
}

function tamanho(size){
    h1 = document.querySelector('h1');
    h1.style.fontSize = size;
  }