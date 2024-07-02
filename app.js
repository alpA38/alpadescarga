let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calificacion(a,e,i,o){
    let promedio = parseInt((a+e+i+o)/4);
    return promedio;
}

function verifica(nota){
    if (promedio>=5){console.log('Aprobaste');}else{
        console.log('Reprobaste');
    }
}

let = prom = calificacion(nota1,nota2,nota3,nota4);

function verificaAprobacion(promedio){
    return promedio>=5? 'Aprobado' : 'Reprobado';
}


//grafica
function texto(elemento, palabra){ //dar texto al elemento
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = palabra;
}

texto('p','Digita tu dinero en Dolares');

function dolarAReal(dolares,precio){
    var cotizacion = precio;
    var reales = dolares*cotizacion;
    return reales;
}

//puesta a prueba

function miFuncion(){
    let dolar = document.getElementById('numeroUsuario').value;
    texto('p',`$${dolar} al cambio son ¢${dolarAReal(2,4.18)} reales brasileños`);
}

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);