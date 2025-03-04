const listaAmigos = []
const inputAmigo =document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//Agregar amigos en la lista

function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};

//Sortear lista de amigos

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random]
    ulResultado.innerHTML = `<li> El amigo secreto es: ${inputAmigo.value}</li>`;
    
};