let amigos = []
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let buttonAdd = document.getElementById('button-add');


function agregarAmigo() {
    let nombre = inputAmigo.value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; //devuelve si no es válido
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarLista()
}

console.log(amigos)

function mostrarLista() {
    listaAmigos.innerHTML = ""; //se limpia la lista

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

//conecto el boton con la funcion
buttonAdd.addEventListener('click', agregarAmigo);

function sortearAmigo() {
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
    return; // salir si no hay amigos
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML =
    "El amigo secreto es: " + amigoSorteado;
}

// conectar botón de sorteo
document.getElementById("button-draw").addEventListener("click", sortearAmigo);
