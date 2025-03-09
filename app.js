// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ArrayAmigos = []
let textamigo = document.getElementById("amigo");


function agregarAmigo(){
    let nombreAmigo = textamigo.value;

    if(nombreAmigo == ""){
        alert("Compo vacio, por favor de ingresar un nombre valido")
        return
    }
    AgregarAlArray(nombreAmigo)

    AgregarLista(nombreAmigo, "listaAmigos")

    textamigo.value = ""
}


function sortearAmigo(){
    if(ArrayAmigos.length == 0){
        alert("Debes agregar a un amigo")
        return
    }
    
    Limpiar();
    let numeroGanador = Math.floor(Math.random() * ArrayAmigos.length)
    AgregarLista("El amigo secreto sorteado es: "+ArrayAmigos[numeroGanador], "resultado")
    ArrayAmigos = []
}



//Auxiliares

function AgregarLista(amigo,id){
    let lista = document.getElementById(id);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigo))
    lista.appendChild(li)
}

function AgregarAlArray(amigo){
    ArrayAmigos.push(amigo)
}

function Limpiar(){
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    
}