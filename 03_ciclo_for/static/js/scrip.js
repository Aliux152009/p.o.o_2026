/*1. El Contador en Pantalla
Selecciona el párrafo con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega (concatena con +=)
 el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo. */

 function contadorPantalla(){
    let numeros = [];
    const container = document.getElementById(`resultadoContainer`);
    const resultado = document.getElementById(`result1`);
    for(let i =1; i<= 10; i++){
        numeros.push(i);
    }
    resultado.textContent = `contando: ${numeros.join(" - ")}`
    container.classList.remove(`d-none`);
 }

 /*Lista de Asistencia Automática
Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el párrafo pantalla y límpialo primero asignándole un texto vacío ("").
Usa un ciclo for para recorrer el arreglo. En cada iteración, agrega el nombre del estudiante al párrafo,
 separándolos por una coma y un espacio. */

function asistenciaAutomatica (){
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById(`resultadoContainer2`)
    const resultado = document.getElementById(`result2`);
    for(let i =0; i<=4; i++){

    }
}