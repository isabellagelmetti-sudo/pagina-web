function ingresar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    if(nombre == "" || edad == ""){
        alert("Completá todos los campos");
    }else{
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("edad", edad);
        window.location.href = "sistema.html";
    }
}

let genero = "";

// 6 Masculinos
let leMaleClasico = 0;
let ultraMale = 0;
let leMaleParfum = 0;
let leBeau = 0;
let leBeauParfum = 0;
let scandalHombre = 0;

// 6 Femeninos
let classique = 0;
let laBelle = 0;
let laBelleParfum = 0;
let scandalMujer = 0;
let scandalLeParfum = 0;
let divine = 0;

function seleccionarGenero(valor, boton){
    genero = valor;
    localStorage.setItem("genero", genero);
    marcarSeleccion(boton);
}

function marcarSeleccion(boton){
    boton.style.backgroundColor = "#d4af37";
    boton.style.color = "black";
}

/* SUMAR PUNTOS SEGÚN OPCIÓN */

function sumarPuntos(tipo, boton){
    marcarSeleccion(boton);

    
    if(tipo == "elegante"){
        leMaleParfum += 3;
        leMaleClasico += 1;
        classique += 2;
        divine += 3;
    }
    if(tipo == "seductor"){
        ultraMale += 3;
        leBeauParfum += 2;
        laBelle += 3;
        laBelleParfum += 3;
    }
    if(tipo == "misterioso"){
        leMaleParfum += 2;
        leBeauParfum += 3;
        laBelleParfum += 3;
        scandalLeParfum += 2;
    }
    if(tipo == "aventurero"){
        leBeau += 3;
        leMaleClasico += 2;
        classique += 2;
        divine += 1;
    }
    if(tipo == "dulce"){
        leBeauParfum += 1;
        laBelle += 3;
        scandalMujer += 2;
    }
    if(tipo == "dominante"){
        scandalHombre += 3;
        ultraMale += 1;
        scandalLeParfum += 3;
        divine += 2;
    }
    if(tipo == "diario"){
        leMaleClasico += 3;
        leBeau += 2;
        classique += 3;
        divine += 1;
    }
    if(tipo == "noche"){
        ultraMale += 3;
        scandalHombre += 2;
        laBelleParfum += 2;
        scandalMujer += 3;
        scandalLeParfum += 3;
    }
    if(tipo == "citas"){
        leBeauParfum += 2;
        ultraMale += 2;
        laBelle += 3;
        laBelleParfum += 2;
    }
    if(tipo == "elegante2"){
        leMaleParfum += 3;
        scandalHombre += 2;
        divine += 3;
        classique += 1;
    }
    if(tipo == "verano"){
        leBeau += 3;
        leMaleClasico += 1;
        divine += 2;
    }
    if(tipo == "vainilla"){
        ultraMale += 2;
        leMaleParfum += 2;
        laBelle += 3;
        laBelleParfum += 3;
    }
    if(tipo == "lavanda"){
        leMaleClasico += 3;
        leMaleParfum += 2;
    }
    if(tipo == "coco"){
        leBeau += 3;
        leBeauParfum += 3;
    }
    if(tipo == "flores"){
        classique += 2;
        divine += 3;
    }
    if(tipo == "citricos"){
        leBeau += 2;
        leMaleClasico += 1;
    }
    if(tipo == "madera"){
        scandalHombre += 2;
        leMaleParfum += 2;
        leBeauParfum += 1;
    }
    if(tipo == "suave"){
        leMaleClasico += 2;
        leBeau += 2;
        classique += 2;
    }
    if(tipo == "moderada"){
        leMaleParfum += 2;
        divine += 2;
        laBelle += 1;
    }
    if(tipo == "intensa"){
        ultraMale += 2;
        scandalHombre += 2;
        scandalMujer += 2;
        laBelleParfum += 2;
    }
    if(tipo == "muyintensa"){
        leBeauParfum += 3;
        scandalHombre += 1;
        laBelleParfum += 2;
        scandalLeParfum += 3;
    }
    if(tipo == "sexy"){
        ultraMale += 3;
        leBeauParfum += 2;
        laBelle += 2;
        laBelleParfum += 3;
        scandalMujer += 2;
    }
    if(tipo == "sofisticado"){
        leMaleParfum += 3;
        divine += 3;
        classique += 2;
    }
    if(tipo == "fresco"){
        leBeau += 3;
        leMaleClasico += 2;
    }
    if(tipo == "imponente"){
        scandalHombre += 3;
        scandalLeParfum += 3;
        divine += 2;
    }
}
function calcularResultado(){
    genero = localStorage.getItem("genero");
    let resultado = "";

    if(genero == "masculino"){
        let max = Math.max(leMaleClasico, ultraMale, leMaleParfum, leBeau, leBeauParfum, scandalHombre);
        
        if(max == leMaleClasico) resultado = "Le Male (Clásico)";
        else if(max == ultraMale) resultado = "Ultra Male";
        else if(max == leMaleParfum) resultado = "Le Male Le Parfum";
        else if(max == leBeau) resultado = "Le Beau";
        else if(max == leBeauParfum) resultado = "Le Beau Le Parfum";
        else resultado = "Scandal Pour Homme";
    }
    if(genero == "femenino"){
        let max = Math.max(classique, laBelle, laBelleParfum, scandalMujer, scandalLeParfum, divine);
        
        if(max == classique) resultado = "Classique";
        else if(max == laBelle) resultado = "La Belle";
        else if(max == laBelleParfum) resultado = "La Belle Le Parfum";
        else if(max == scandalMujer) resultado = "Scandal";
        else if(max == scandalLeParfum) resultado = "Scandal Le Parfum";
        else resultado = "Divine";
    }

    localStorage.setItem("perfumeFinal", resultado);
    window.location.href = "resultado.html";
}