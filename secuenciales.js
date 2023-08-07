// resolucion de ejercicios

// funcion declarativa de ejercicios
function CallMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      `ingrese el numero de ejercicio que quiere ejecutar :
1. Area del Triángulo. \r\n 2. Convertir Dolares.\r\n 3. Saber la Edad de los empleados.\r\n 4. Pago Estacionamiento.\r\n 5. Cotizar Pintura.\r\n 6. Hipotenusa de un triangulo rectangulo
       \r\n 7. Precio de Boleto.\r\n 8. Tiempo de llegada en Bicicleta.\r\n 9. Costo de llamada.\r\n 10. Costo de llamada.\r\n 11. Costo de llamada.\r\n 12. Precio de articulo con dscto `
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
      let base = parseInt(prompt("ingresa Base"));
      let altura = parseInt(prompt("ingresa Altura"));
      alert("Area del Triangulo es " + area_triangulo(base, altura));
      break;

    case 2:
      let pesomexicano = parseInt(prompt("ingrese cantidad en Peso MExicano"));
      alert("Puedes comprar " + ej6_dolares(pesomexicano) + " Dolares");
      break;

    case 3:
      let nacimiento = parseInt(prompt("ingrese fecha nacimiento"));
      alert("La Edad es " + edadpersonal(nacimiento));
      break;

    case 4:
      let horaestacionamiento = prompt("ingrese horas");
      let precioxhora = parseInt(prompt("ingrese precioxhora"));
      alert(
        "Debes pagar " + pagoestacionamiento(horaestacionamiento, precioxhora)
      );
      break;

    case 5:
      let areaenmetros = prompt("ingrese area en m2");
      let precioxm2 = parseInt(prompt("ingrese precio x m2"));
      alert("Cotizacion es " + cotizacionpintura(areaenmetros, precioxm2));
      break;

    case 6:
      let lado01 = prompt("ingrese valor del Primer lado");
      let lado02 = prompt("ingrese valor del Segundo lado");
      alert("La Hipotenusa es " + Hipotenusa(lado01, lado02));
      break;

    case 7:
      let kilometrosarecorrer = prompt("Kilometros recorridos");
      let pagoxkilometro = prompt("pago x kilometro");
      alert("EL boleto vale " + kilometrosarecorrer * pagoxkilometro);
      break;

    case 8:
      let distanciaciudad = prompt("Distancia de la ciudad");
      let velocidad = prompt("velocidad");
      alert("EL boleto vale " + distanciaciudad * velocidad);
      break;

    case 9:
      let Tiempollamada = prompt("Minutos de llamada");
      let costollamadaxminuto = prompt("precio por minuto");
      alert(
        "El costo de la llamada es " +
          Tiempollamada * costollamadaxminuto +
          " soles"
      );
      break;

    case 10:
      let costoxmetro3 = prompt("Costo x m3 de agua");
      let cantidadaguaenm3 = prompt("cantidad de agua en m3");
      alert(
        "El costo de Agua es " + costoxmetro3 * cantidadaguaenm3 + " soles"
      );
      break;

    case 11:
      let kilowats = prompt("Costo x m3 de agua");
      let costoxkilowats = prompt("cantidad de agua en m3");
      alert("El costo Luz es " + kilowats * costoxkilowats + " soles");
      break;
    case 12:
      let preciodearticulo = prompt("Precio original del articulo");
      alert(preciocondescuento(preciodearticulo));
      break;
  }
}

// funciones ejcutoras
// area truangulo
function area_triangulo(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    return "oye! ingresa datos";
  } else {
    return (base * altura) / 2;
  }
}

// dolares
function ej6_dolares(pesomexicano) {
  if (isNaN(pesomexicano)) {
    return "oye! ingresa datos";
  } else {
    let dolar = 0.059;
    return pesomexicano * dolar;
  }
}

// Edad personal
function edadpersonal(nacimiento) {
  if (isNaN(nacimiento)) {
    return "ingresa fecha nacimiento";
  } else {
    return 2023 - nacimiento;
  }
}

// Edad personal
function pagoestacionamiento(horaestacionamiento, precioxhora) {
  if (isNaN(horaestacionamiento) || isNaN(precioxhora)) {
    return "ingresa datos";
  } else {
    return Math.ceil(horaestacionamiento) * precioxhora;
  }
}
// area en m2 de Pintura
function cotizacionpintura(precioxm2, areaenmetros) {
  if (isNaN(areaenmetros) || isNaN(precioxm2)) {
    return "ingresa datos";
  } else {
    return precioxm2 * areaenmetros;
  }
}

// Hipotenusa
function Hipotenusa(lado02, lado01) {
  if (isNaN(lado01) || isNaN(lado02)) {
    return "ingresa datos";
  } else {
    return Math.sqrt(Math.pow(lado01, 2) + Math.pow(lado02, 2)).toFixed(3);
  }
}

// precio con descuento del 20%
function preciocondescuento(preciodearticulo) {
  if (isNaN(preciodearticulo)) {
    return "ingresa datos";
  } else {
    let precio2 = preciodearticulo * 0.8;
    let preciototal = (precio2 * 1.18).toFixed(2);
    return `El precio con dscto es ${precio2} y el precio + IVa(18%) ${preciototal}`;
  }
}

// function ej1_sumarValores(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "oye! ingresa datos";
//   } else {
//     return a + b;
//   }
// }

// function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
//   if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
//     return "oye! ingresa datos";
//   } else {
//     return (ex1 + ex2 + ex3 + ex4) / 4;
//   }
// }

// function ej4_convPulgadas(metros) {
//   if (isNaN(metros)) {
//     return "oye! ingresa datos";
//   } else {
//     let pulg = 0.0254;
//     return Math.round(metros / pulg);
//   }
// }

// function ej5_Circunsferencia(radio) {
//   if (isNaN(radio)) {
//     return "oye! ingresa datos";
//   } else {
//     let pin = 3.14;
//     return Math.round(radio * radio * pin);
//   }
// }
function CallMenudos() {
  let nro_ejercicio2 = parseInt(
    prompt(
      `ingrese el numero de ejercicio que quiere ejecutar :
1. Ahorros de una persona. \r\n 2. Cheque de gastos.\r\n 3. Potencia electrica de circuito.
       `
    )
  );
  if (isNaN(nro_ejercicio2)) {
    alert("el campo esta vacio");
  } else {
    MenuEjercicios2(nro_ejercicio2);
  }
}

// funcion de contenido variables y argumentos
function MenuEjercicios2(nro_ejercicio2) {
  switch (nro_ejercicio2) {
    case 1:
      let sueldosemanal = parseInt(prompt("ingresa Sueldo semanal"));
      alert(ahorrodeunapersona(sueldosemanal));
      break;

      case 2:
        let gastohotel = parseInt(prompt("Gasto Hotel"));
        let gastocomida = parseInt(prompt("Gasto comida"));
        let diasviaje = parseInt(prompt("Dias de viaje"));
        alert(gastosdeviaje(gastocomida,gastohotel,diasviaje));
        break;

        case 3:
          let corriente = parseInt(prompt("Ingrese (I) intensidad corriente"));
          alert(potenciaCorriente(corriente));
          break;
  }
}

// funciones ejcutoras
// ahorro persona
function ahorrodeunapersona(sueldosemanal) {
  if (isNaN(sueldosemanal)) {
    return "oye! ingresa datos";
  } else {
    let ahorrosemanal = sueldosemanal*0.15;
    let ahorroanual = ahorrosemanal*48;
    return `El ahorro al 15%  anual es: ${ahorroanual} `
      }
}

function gastosdeviaje(gastocomida,gastohotel,diasviaje){
  if (isNaN(gastocomida) || isNaN(gastohotel) || isNaN(diasviaje)) {
    return "ingresa datos";
  } else {
    let chequeviaticos = (gastohotel + gastocomida + 100)*diasviaje;
    return `El Cheque de debe ser de: ${chequeviaticos}  pesos `
      }

}

function potenciaCorriente(corriente){
  if (isNaN(corriente) ) {
    return "ingresa datos";
  } else {
    let vatios = 4*corriente;
    let potencia = vatios*corriente;
    return `La potencia de corrient es: ${potencia}`
      }

}