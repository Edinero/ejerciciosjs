/**Un profesor tiene un salario inicial de $1500, y recibe un incremento
de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
algoritmo y represente la solución mediante el diagrama de flujo, el
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado. */
let year = 3;
const calculoSalario = () => {
  let salario = 1500;

  for (let year = 1; year <= 6; year++) {
    salario = (salario * 1.1).toFixed(2);
  }
  console.log(`El salario en el año  ${year} es de ${salario}`);
};
calculoSalario();

/**“El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles
(D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente.
La empresa acepta tarjetas de crédito con un cargo
de 5 % sobre la compra. Suponiendo que los clientes adquieren N
hamburguesas, las cuales pueden ser de diferente tipo, realice un
algoritmo para determinar cuánto deben pagar. */
let simple = 20;
let doble = 25;
let triple = 28;
const precioburger = (cantidad, tipo) => {
  if (tipo === simple) {
    return cantidad * simple * 1.05;
  } else if (tipo === doble) {
    return cantidad * doble * 1.05;
  } else if (tipo === triple) {
    return cantidad * triple * 1.05;
  }
  console.log("Precio de las hamburguesas es", precioburger(100, simple));
};
precioburger();

/**Se requiere un algoritmo para determinar, de N cantidades, cuántas
son cero, cuántas son menores a cero, y cuántas son mayores a cero.
Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para
representarlo, utilizando el ciclo apropiado. */
const numeros = [-1, -3, -5, 0, 2, 5, 9];

const contarCantidades = (numeros) => {
  let cantidadesCero = numeros.filter((numero) => numero === 0).length;
  let cantidadesMenorCero = numeros.filter((numero) => numero < 0).length;
  let cantidadesMayorCero = numeros.filter((numero) => numero > 0).length;
  console.log("iguale a 0", cantidadesCero);
  console.log("mayores a 0", cantidadesMayorCero);
  console.log("menores a 0", cantidadesMenorCero);
};
contarCantidades(numeros);

/**Se requiere un algoritmo para determinar cuánto ahorrará en pesos
una persona diariamente, y en un año, si ahorra 3¢ el primero de
enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente
todo el año. */

const calcularAhorroDiario = () => {
  const inicioAhorro = 3;
  let ahorroDiario = inicioAhorro;
  let ahorroAnual = 0;

  for (let dia = 1; dia <= 365; dia++) {
    ahorroAnual += ahorroDiario;
    ahorroDiario *= 3;
  }
  return (ahorroAnual = ahorroDiario * 365);
};

/*Realice el algoritmo para determinar cuánto pagará una persona que
adquiere N artículos, los cuales están de promoción. Considere que
si su precio es mayor o igual a $200 se le aplica un descuento de 15%,
y si su precio es mayor a $100 pero menor a $200, el descuento es de
12%; de lo contrario, sólo se le aplica 10%. Se debe saber cuál es el
costo y el descuento que tendrá cada uno de los artículos y finalmente
cuánto se pagará por todos los artículos obtenidos.*/

const calcularDescuento = (precio, cantidad) => {
  if (precio >= 200) {
    return precio * cantidad * 0.85;
  } else if (precio > 100 && precio < 200) {
    return precio * cantidad * 0.88;
  } else {
    return precio * cantidad * 0.9;
  }
};
console.log(calcularDescuento(100, 10));

/* Un cliente de un banco deposita equis cantidad de pesos cada mes
en una cuenta de ahorros. La cuenta percibe un interés fijo durante
un año de 10 % anual. Realice un algoritmo para determinar el total
de la inversión final de cada año en los próximos N años.*/
const inversionMensual = 1000;
const numAnios = 5;

function calcularInversionFinal(inversionMensual, numAnios) {
  const interesAnual = 0.1; // 10% de interés anual
  let inversionFinalPorAnio = [];

  for (let anio = 1; anio <= numAnios; anio++) {
    let inversionAcumulada = 0;
    for (let mes = 1; mes <= 12; mes++) {
      inversionAcumulada += inversionMensual;
      inversionAcumulada += inversionAcumulada * (interesAnual / 12);
    }
    inversionFinalPorAnio.push(inversionAcumulada);
  }
  return inversionFinalPorAnio;
}
const inversionFinalAnual = calcularInversionFinal(inversionMensual, numAnios);
console.log(`Inversión final en ${numAnios} años:`);
for (let i = 0; i < inversionFinalAnual.length; i++) {
  console.log(`Año ${i + 1}: s/ ${inversionFinalAnual[i].toFixed(2)}`);
}

/**Los directivos de equis escuela requieren determinar cuál es la edad
promedio de cada uno de los M salones y cuál es la edad promedio
de toda la escuela. Realice un algoritmo para determinar estos promedios
 */
const salonA = [10, 20, 30, 15];
suma = 0;
salonA.forEach((alumnos) => {
  suma += alumnos;
});
console.log(`Promedio edades es ${suma / salonA.length}, Suma edades ${suma}`);

/**Realice un algoritmo para leer las calificaciones de N alumnos y determine
el número de aprobados y reprobados. Represéntelo mediante
diagrama de flujo, pseudocódigo y diagrama N/S. */

const alumnos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const calcularCalificacion = (alumnos) => {
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
};
console.log(calcularCalificacion(alumnos));

/**Realice un algoritmo que determine el sueldo semanal de N trabajadores
considerando que se les descuenta 5% de su sueldo si ganan
entre 0 y 150 pesos. Se les descuenta 7% si ganan más de 150 pero
menos de 300, y 9% si ganan más de 300 pero menos de 450. Los
datos son horas trabajadas, sueldo por hora y nombre de cada trabajador. */

/**Realice un algoritmo donde, dado un grupo de números naturales
positivos, calcule e imprima el cubo de estos números. Represéntelo
mediante diagrama de flujo, pseudocódigo y diagrama N/S. */

const cubos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calcularCubo = (cubos) => {
  let cubos2 = cubos.map((cubo) => cubo * cubo * cubo);
  //return cubos;
  console.log(cubos2);
};
calcularCubo(cubos);

/**Realice un algoritmo para obtener la tabla de multiplicar de un entero
K comenzando desde el 1.  */

const tablaMultiplicar = () => {
  let tabla = [];
  for (let i = 1; i <= 12; i++) {
    tabla.push(i * i);
  }
  return tabla;
};
console.log(tablaMultiplicar());

/**En 1961, una persona vendió las tierras de su abuelo al gobierno
por la cantidad de $1500. Suponga que esta persona ha colocado el
dinero en una cuenta de ahorros que paga 15% anual. ¿Cuánto vale
ahora su inversión? P(1+i)n. */

let anios = 62;
let precioinicial = 1500;
let ahoroanual = 0;

for (let i = 1; i <= anios; i++) {
  ahoroanual += precioinicial * 0.15 + precioinicial;
}
console.log("Ahorro actual ", ahoroanual.toFixed(2));

/**El gerente de una compañía automotriz desea determinar el impuesto
que va a pagar por cada uno de los automóviles que posee,
además del total que va a pagar por cada categoría y por todos los
vehículos, basándose en la siguiente clasificación:
Los vehículos con clave 1 pagan 10% de su valor.
Los vehículos con clave 2 pagan 7% de su valor.
Los vehículos con clave 3 pagan 5% de su valor  */

/**Realice un algoritmo para determinar qué cantidad de dinero hay
en un monedero, considerando que se tienen monedas de diez, cinco
y un peso, y billetes de diez, veinte y cincuenta pesos. Represéntelo
mediante diagrama de flujo, pseudocódigo y diagrama N/S. */

const monedero = [
  [10, 5, 1],
  [20, 50, 10]
];

let monedas = 0;
let billetes = 0;

for (let i = 0; i <= monedero.length; i++) {
monedas += monedero[0][i];
billetes += monedero[1][i];
}
let sumatoria = monedas + billetes;
console.log(`monedas  + Billetes  = ${sumatoria}`);

/*El banco “Bandido de peluche” desea calcular para cada uno de sus N
clientes su saldo actual, su pago mínimo y su pago para no generar
intereses. Además, quiere calcular el monto de lo que ganó por concepto
interés con los clientes morosos. Los datos que se conocen de
cada cliente son: saldo anterior, monto de las compras que realizó y
pago que depositó en el corte anterior. Para calcular el pago mínimo
se considera 15% del saldo actual, y el pago para no generar intereses
corresponde a 85% del saldo actual, considerando que el saldo
actual debe incluir 12% de los intereses causados por no realizar el
pago mínimo y $200 de multa por el mismo motivo.*/

