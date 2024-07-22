alert("Bienvenido, este programa te dirá cual es tu edad, por favor ingresa tus datos.");

//Inicio del programa
function inicio() {
let nombre = prompt("Escribe tu nombre: ");
let annioActual = prompt("Escribe el año actual: ");
let annioDeNacimiento = prompt("Escribe el año en qué naciste: ");

let respuesta = Number(annioActual) - Number(annioDeNacimiento);
alert(nombre+", tienes "+respuesta+" años.");

return prompt("Escriba 1 si desea seguir usando el programa y 2 si desea cerrarlo: ");
}

//Elección para continuar usando el programa o cerrarlo
function continuar(pregunta) {
    if (pregunta === "2") {
        alert("¡Gracias por usar el programa!");
    } else if (pregunta === "1") {
        let nuevaPregunta = inicio();
        continuar(nuevaPregunta);
    } else {
        alert("¡Elige una opción válida!");
        let nuevaPregunta = prompt("Escriba 1 si desea seguir usando el programa y 2 si desea cerrarlo.");
        continuar(nuevaPregunta);       
     }
}

//Llamado recursivo a las funciones
let primerPregunta = inicio();
continuar(primerPregunta);
