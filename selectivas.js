//3.1
/**Realice un algoritmo para determinar si una persona puede votar
con base en su edad en las próximas elecciones. */
const personavotante = (edad) => {
  if (edad >= 18) {
    console.log("Es mayor de edad y Puede votar");
  } else {
    console.log("No puede votar x q es menor de edad");
  }
};
personavotante(18);

// 3.2
/**Realice un algoritmo para determinar el sueldo semanal de un trabajador
con base en las horas trabajadas y el pago por hora, */
const pagotrabajador = (horastrabajadas, pagoxhora) => {
  if (horastrabajadas >= 40) {
    console.log("El sueldo semanal:", pagoxhora * horastrabajadas);
  } else {
    console.log("El sueldo semanal:", pagoxhora * horastrabajadas * 2);
  }
};
pagotrabajador(30, 5);

//3.3
/**El 14 de febrero una persona desea comprarle un regalo al ser querido
que más aprecia en ese momento, su dilema radica en qué regalo
puede hacerle, las alternativas que tiene son las siguientes: */
const compraregalo = (dinero) => {
  if (dinero <= 10) {
    return "compra una Tarjeta";
  } else if (dinero <= 100) {
    return "compra unos Chocolates";
  } else if (dinero <= 250) {
    return "compra unas Flores";
  } else if (dinero >= 251) {
    return "comprale un Anillo";
  }
};
console.log(compraregalo(101));

//3.4
/**El dueño de un estacionamiento requiere un diagrama de flujo con
el algoritmo que le permita determinar cuánto debe cobrar por el
uso del estacionamiento a sus clientes. Las tarifas que se tienen son
las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos. */
const cobroestacionamiento = (tiempoparqueo) => {
  horasparqueo = Math.ceil(tiempoparqueo);
  if (horasparqueo <= 2) {
    return horasparqueo * 5;
  } else if (horasparqueo <= 5) {
    return horasparqueo * 4 + 10;
  } else if (horasparqueo <= 10) {
    return horasparqueo * 3 + 25;
  } else if (horasparqueo >= 11) {
    return horasparqueo * 2 + 37;
  }
};
console.log("Tarifa es: s/", cobroestacionamiento(1.5));

//3.5
/**Se tiene el nombre y la edad de tres personas. Se desea saber el
nombre y la edad de la persona de menor edad. Realice el algoritmo
correspondiente y represéntelo con un diagrama de flujo, pseudocódigo
y diagrama N/S. */
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 20 },
  { nombre: "Pedro", edad: 22 },
];
//personamenor()

//3.6
/**Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que
muestren el algoritmo para determinar el costo y el descuento que
tendrá un artículo. Considere que si su precio es mayor o igual a
$200 se le aplica un descuento de 15%, y si su precio es mayor a $100
pero menor a $200, el descuento es de 12%, y si es menor a $100,
sólo 10%. */
const costoArticulo = (precio) => {
  if (precio >= 200) {
    return (precio = precio * 0.85);
  } else if (precio > 100 < 200) {
    return (precio = precio * 0.88);
  } else if (precio < 100) {
    return (precio = precio * 0.9);
  }
};
console.log("El precio con descuento es ", costoArticulo(99));

//3.7
/**El presidente de la república ha decidido estimular a todos los estudiantes
de una universidad mediante la asignación de becas
mensuales, para esto se tomarán en consideración los siguientes
criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a
9, la beca será de $2000.00; con promedio mayor o igual a 7.5, de
$1000.00; para los promedios menores de 7.5 pero mayores o iguales
a 6.0, de $500.00; a los demás se les enviará una carta de invitación
incitándolos a que estudien más en el próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios
mayores o iguales a 9, se les dará $3000; con promedios menores a
9 pero mayores o iguales a 8, $2000; para los alumnos con promedios
menores a 8 pero mayores o iguales a 6, se les dará $100, y a los
alumnos que tengan promedios menores a 6 se les enviará carta de
invitación. Realice el */
const alumnosBecados = (edad, promedio) => {
  if (edad > 18) {
    if (promedio >= 9) {
      return "tienes una beca de $ 2000";
    } else if (promedio >= 7.5) {
      return "tienes una beca de $ 1000";
    } else if (promedio >= 6.0) {
      return "tienes una beca de $ 500 ";
    } else {
      return "estudien más en el próximo ciclo escolar";
    }
  } else {
    if (promedio >= 9) {
      return "tienes una beca de $ 3000";
    } else if (promedio >= 8) {
      return "tienes una beca de $ 2000";
    } else if (promedio >= 6) {
      return "tienes una beca de $ 100";
    } else {
      return "estudien más en el próximo ciclo escolar";
    }
  }
};
console.log(alumnosBecados(18, 15));

// 3.8
/**Cierta empresa proporciona un bono mensual a sus trabajadores, el
cual puede ser por su antigüedad o bien por el monto de su sueldo
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
algoritmo correspondiente para calcular los dos tipos de bono, asignando
el mayor, y represéntelo con un diagrama de flujo y pseudocódigo */

const bonomensual = (sueldo, antiguedad) => {
  let bonoAntiguedad = 0;
  let bonoSueldo = 0;

  if (antiguedad > 2 && antiguedad < 5) {
    bonoAntiguedad = sueldo * 0.2;
  } else if (antiguedad >= 5) {
    bonoAntiguedad = sueldo * 0.3;
  }

  if (sueldo < 1000) {
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    bonoSueldo = sueldo * 0.15;
  } else {
    bonoSueldo = sueldo * 0.1;
  }

  console.log("Bono antiguedad:", bonoAntiguedad);
  console.log("Bono sueldo:", bonoSueldo);
};
bonomensual(3500, 3);

//3.9
/**Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
amplia (A) y daños a terceros (B). Para el plan A, la cuota
base es de $1,200, y para el B, de $950. A ambos planes se les carga
10% del costo si la persona que conduce tiene por hábito beber alcohol,
5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
cardiaca o diabetes–, y si tiene más de 40 años, se le carga
20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
el costo base. Realice diagrama de flujo y diagrama N/S que represente
el algoritmo para determinar cuánto le cuesta a una persona
contratar una póliza. */
const seguroAuto = (PrecioBase, bbAlcohol, usaLentes, padeceEnf, edad) => {
  let constoPoliza = PrecioBase + bbAlcohol + usaLentes + padeceEnf + edad;
  if (bbAlcohol) {
    PrecioBase * 0.1;
  }
  if (usaLentes) {
    PrecioBase * 0.05;
  }
  if (padeceEnf) {
    PrecioBase * 0.05;
  }
  if (edad > 40) {
    constoPoliza * 0.2;
  } else {
    constoPoliza * 0.1;
  }
  return constoPoliza;
};
console.log("La poliza ", seguroAuto(950, true, false, true, 35));

//3.10
/**Represente un algoritmo mediante un diagrama de flujo y el pseudocódigo
para determinar a qué lugar podrá ir de vacaciones unapersona, considerando que la línea de autobuses “La tortuga” cobra
por kilómetro recorrido. Se debe considerar el costo del pasaje tantode ida, como de vuelta; los datos que se conocen y que son fijos son:
México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800 m. También se debe considerar la posibilidad de tener que quedarse en casa. */

const vacaciones = (km, casa) => {};
//console.log(vacaciones(18500, 1));

//311
/**Se les dará un bono por antigüedad a los empleados de una tienda.
Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
sucesivamente hasta los 5 años. Para los que tengan más de 5, el
bono será de $1000. Realice un algoritmo y represéntelo mediante
el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
determinar el bono que recibirá un trabajador. */
const bonoantiguedadempleado = (antiguedadanos) => {
  if ((antiguedadanos = 1)) {
    return "Recbiraas $ 100";
  } else if ((antiguedadanos = 2)) {
    return "Recbiraas $ 200";
  } else if ((antiguedadanos = 3)) {
    return "Recbiraas $ 300";
  } else if ((antiguedadanos = 4)) {
    return "Recbiraas $ 400";
  } else if ((antiguedadanos = 5)) {
    return "Recbiraas $ 500";
  } else if (antiguedadanos > 6) {
    return "Recbiraas $ 1000";
  }
};
console.log(bonoantiguedadempleado(5));

//312
/**Realice un algoritmo que permita determinar el sueldo semanal de
un trabajador con base en las horas trabajadas y el pago por hora,
considerando que a partir de la hora número 41 y hasta la 45, cada
hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar
más de 50 horas no está permitido. Represente el algoritmo mediante
el diagrama de flujo, el pseudocódigo y el diagrama N/S. */
const sueldosemanal2 = (horastrabajadasempleado, costohoraempleado) => {
  if (horastrabajadasempleado <= 40) {
    return horastrabajadasempleado * costohoraempleado;
  } else if (horastrabajadasempleado > 41 && horastrabajadasempleado < 45) {
    return horastrabajadasempleado * costohoraempleado * 2;
  } else if (horastrabajadasempleado >= 46 && horastrabajadasempleado <= 50) {
    return horastrabajadasempleado * costohoraempleado * 3;
  } else if (horastrabajadasempleado >= 51) {
    return "No esta permitido";
  }
};
console.log("El sueldo es", sueldosemanal2(51, 5));

//313
/**Los alumnos de una escuela desean realizar un viaje de estudios,
pero requieren determinar cuánto les costará el pasaje, considerando
que las tarifas del autobús son las siguientes: si son más de 100
alumnos, el costo es de $20; si son entre 50 y 100, $35; entre 20 y
49, $40, y si son menos de 20 alumnos, $70 por cada uno. Realice
el algoritmo para determinar el costo del pasaje de cada alumno.
Represente el algoritmo mediante el diagrama de flujo, el pseudocódigo
y el diagrama N/S. */
const viajealumnos = (cantAlumnos) => {
  if (cantAlumnos > 100) {
    return cantAlumnos * 20;
  } else if (cantAlumnos <= 100 && cantAlumnos >= 50) {
    return cantAlumnos * 35;
  } else if (cantAlumnos <= 49 && cantAlumnos >= 20) {
    return cantAlumnos * 40;
  } else {
    return cantAlumnos * 70;
  }
};
console.log("EL costo del viaje es ", viajealumnos(48));

//314
/** Realice un algoritmo que, con base en una calificación proporcionada
(0-10), indique con letra la calificación que le corresponde: 10 es
“A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. Represente
el diagrama de flujo, el pseudocódigo y el diagrama N/S correspondiente.*/
const calificacion = (nota) => {
  if (nota === 9) {
    return "Tienes una A";
  } else if (nota === 8) {
    return "Tienes una B";
  } else if (nota === 7) {
    return "Tienes una C";
  } else if (nota === 6) {
    return "Tienes una D";
  } else if (nota <= 5) {
    return "Tienes una F";
  }
};

console.log(calificacion(4));

//315
/**Realice un algoritmo que, con base en un número proporcionado
(1-7), indique el día de la semana que le corresponde (L-D) */
const semana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const numerosemana = (numero) => {
  if (numero === 1) {
    return semana[numero - 1];
  } else if (numero === 2) {
    return semana[numero - 1];
  } else if (numero === 3) {
    return semana[numero - 1];
  } else if (numero === 4) {
    return semana[numero - 1];
  } else if (numero === 5) {
    return semana[numero - 1];
  } else if (numero === 6) {
    return semana[numero - 1];
  } else if (numero === 7) {
    return semana[numero - 1];
  }
};
console.log(numerosemana(7));

//316
/**El secretario de educación ha decidido otorgar un bono por desempeño
a todos los profesores con base en la puntuación siguiente:
Puntos Premio
0 - 100
101 - 150
151 - en adelante
1 salario
2 salarios mínimos
3 salarios mínimos
Realice un algoritmo que permita determine el monto de bono que
percibirá un profesor (debe capturar el valor del salario mínimo y
los puntos del profesor). Represente el algoritmo mediante el diagrama
de flujo, el pseudocódigo y el diagrama N/S. */

const bonodesempeno = (puntos) => {
  salarioMin = 900;
  if (puntos >= 0 && puntos <= 100) {
    console.log("salario", salarioMin, "y tienes", puntos, "puntos");
  } else if (puntos >= 101 && puntos <= 150) {
    console.log("salario", salarioMin * 2, "y tienes", puntos, "puntos");
  } else if (puntos >= 151) {
    console.log("salario", salarioMin * 3, "y tienes", puntos, "puntos");
  }
};
bonodesempeno(160);

//3.17
/**Realice un algoritmo y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S que permitan determinar qué
paquete se puede comprar una persona con el dinero que recibirá
en diciembre, considerando lo siguiente:
• Paquete A. Si recibe $50,000 o más se comprará una televisión,
un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
• Paquete B. Si recibe menos de $50,000 pero más (o igual) de
$20,000, se comprará una grabadora, tres pares de zapatos,
cinco camisas y cinco pantalones.
• Paquete C. Si recibe menos de $20,000 pero más (o igual) de
$10,000, se comprará dos pares de zapatos, tres camisas y tres
pantalones.
• Paquete D. Si recibe menos de $10,000, se tendrá que conformar
con un par de zapatos, dos camisas y dos pantalones. */

const paquete = (dinero) => {
  if (dinero >= 50000) {
    return "compra el Paquete A";
  } else if (dinero >= 20000 && dinero <= 50000) {
    return "compra el Paquete B";
  } else if (dinero >= 10000 && dinero <= 20000) {
    return "compra el Paquete C";
  } else if (dinero <= 10000) {
    return "compra el Paquete D";
  }
};
console.log(paquete(200000));

/**Realice un algoritmo y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S que permitan determinar la cantidad
del bono navideño que recibirá un empleado de una tienda,
considerando que si su antigüedad es mayor a cuatro años o su sueldo
es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y
en caso contrario sólo le corresponderá 20 % de éste. */

const bonoNavideño = (sueldo, antiguedad) => {
  if (sueldo < 2000 || antiguedad < 4) {
    return (sueldo = +sueldo * 0.25);
  } else {
    return (sueldo = +sueldo * 0.2);
  }
};
console.log("El sueldo es  ", bonoNavideño(1000, 3));

/**La secretaria de salud requiere un diagrama de flujo que le represente
el algoritmo que permita determinar qué tipo de vacuna (A, B o
C) debe aplicar a una persona, considerando que si es mayor de 70
años, sin importar el sexo, se le aplica la tipo C; si tiene entre 16 y
69 años, y es mujer, se le aplica la B, y si es hombre, la A; si es menor
de 16 años, se le aplica la tipo A, sin importar el sexo. */

const TipoVacuna = (edad, genero) => {
  if (edad > 70) {
    return "Vacuna C";
  } else if (edad >= 16 && edad <= 69) {
    if (genero === "f") {
      return "Vacuna B";
    } else {
      return "Vacuna A";
    }
  } else {
    return "Vacuna  A";
  }
};
console.log(TipoVacuna(26, "m"));

//* Realice un algoritmo para resolver el siguiente problema: una fábrica
//de pantalones desea calcular cuál es el precio final de venta
//y cuánto ganará por los N pantalones que produzca con el corte de
//alguno de sus modelos, para esto se cuenta con la siguiente información://////*
/**Tiene dos modelos A y B, tallas 30, 32 y 36 para ambos modelos.
b) Para el modelo A se utiliza 1.50 m de tela, y para el B 1.80 m.
c) Al modelo A se le carga 80 % del costo de la tela, por mano de
obra. Al modelo B se le carga 95 % del costo de la tela, por el
mismo concepto.
A las tallas 32 y 36 se les carga 4 % del costo generado por
mano de obra y tela, sin importar el modelo.
e) Cuando se realiza el corte para fabricar una prenda sólo se hace
de un solo modelo y una sola talla.
f) Finalmente, a la suma de estos costos se les carga 30%, que
representa la ganancia extra de la tienda. */

function CostoPrenda(modelo, talla) {
  const costoTelaA = 1.5;
  const costoTelaB = 1.8;
  const costoManoObraA = costoTelaA * 0.8;
  const costoManoObraB = costoTelaB * 0.95;

  let costoTotal;
  if (modelo === "A") {
    if (talla === 30) {
      costoTotal = costoTelaA + costoManoObraA;
    } else {
      costoTotal =
        costoTelaA + costoManoObraA + (costoTelaA + costoManoObraA) * 0.04;
    }
  } else {
    if (talla === 30) {
      costoTotal = costoTelaB + costoManoObraB;
    } else {
      costoTotal =
        costoTelaB + costoManoObraB + (costoTelaB + costoManoObraB) * 0.04;
    }
  }
const costoFinal = costoTotal * 1.3;

  return costoFinal;
}

console.log ('Precio segun modelo', CostoPrenda("B",36));