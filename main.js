// resolucion de ejercicios

// funcion declarativa de ejercicios
function CallMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "ingrese el numero de ejercicio que quiere ejecutar : \r\n 1.Suma.\r\n 2.Promedio de examanes.\r\n 3.Area Rectangulo.\r\n 4.Area Circunsferencia.\r\n 5.Convierte metros a pulgadas.\r\n 6.Convertir Dolares"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("el campo esta vacio");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

// funcion de contenido variables y argumentos
function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseInt(prompt("ingresa el valor 1"));
      let valor2 = parseInt(prompt("ingresa el valor 2"));
      alert("La Suma es " + ej1_sumarValores (valor1, valor2));
      break;

    case 2:
      let ex1 = parseInt(prompt("ingrese nota1: "));
      let ex2 = parseInt(prompt("ingrese nota2 "));
      let ex3 = parseInt(prompt("ingrese nota3: "));
      let ex4 = parseInt(prompt("ingrese nota4: "));
      alert("Promedio "+ ej2_calcularPromedio(ex1, ex2, ex3, ex4));
      break;

      case 3:
      let a = parseInt(prompt("Ingrese base del rectangulo" ));
      let b = parseInt(prompt("Ingrese altura del rectangulo" ));
      alert("Area del rectangulo es " + ej3_area(a,b));
      break

      case 4:
      let radio = parseInt(prompt("Ingrese el radio de circunsferencia  "));
      alert("Area de Circunsferencia es"+ ej5_Circunsferencia(radio) )
      break

      case 5:
        let metros = parseInt(prompt("ingrese los metros de tela" ));
        alert("Pulgadas "+ ej4_convPulgadas(metros));
        break

        case 6:
          let soles = parseInt(prompt("ingrese cantidad en soles" ));
          alert("Dolares "+ ej6_dolares(soles));
          break


  }
}

// funciones ejcutoras
function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "oye! ingresa datos";
  } else {
    return a + b;
  }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
  if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
    return "oye! ingresa datos";
  } else {
    return (ex1 + ex2 + ex3 + ex4) / 4;
  }
}

function ej3_area(a,b) {
  if (isNaN(a) || isNaN(b)) {
    return "oye! ingresa datos";
  } else {
    return (a * b) / 2;
  }
}

function ej4_convPulgadas (metros) {
  if (isNaN(metros)) {
    
    return "oye! ingresa datos";

  } else {
    let pulg = 0.0254;
    return Math.round(metros / pulg);
  }
}

function ej5_Circunsferencia (radio) {
  if (isNaN(radio)) {
    
    return "oye! ingresa datos";

  } else {
    let pin = 3.14;
    return Math.round(radio*radio*pin) ;
  }
}

function ej6_dolares (soles) {
  if (isNaN(soles)) {
    
    return "oye! ingresa datos";

  } else {
    let dolar = 3.6;
    return (soles / dolar) ;
  }
}
