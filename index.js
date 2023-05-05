let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const inputs_numeros = $$(".input-numero");

inputs_numeros.forEach((input) => {
  input.addEventListener("click", (e) => {
    $("#input-numero").value += input.value;
  });
});

$("#limpar-contato").addEventListener("click", (e) => {
  if ($("#input-numero").value !== "") {
    $("#input-numero").value = "";
  }
});

$("#ligar-contato").addEventListener("click", (e) => {
  if ($("#input-numero").value !== "") {
    if (!$("#ligando").classList.contains("active")) {
      $("#ligando").classList.add("active");
    }
  }else{
    alert("É preciso indicar um número para ligar.")
  }
});
