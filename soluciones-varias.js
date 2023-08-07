function calcularImpuestos(vehiculos) {
    // Inicializar variables para el total de impuestos y los totales por categoría
    let totalImpuestos = 0;
    let impuestosPorCategoria = {
      clave1: 0,
      clave2: 0,
      clave3: 0,
    };
  
    // Recorrer todos los vehículos
    for (const vehiculo of vehiculos) {
      const clave = vehiculo.clave;
      const valor = vehiculo.valor;
      let impuesto;
  
      // Calcular el impuesto según la clave del vehículo
      switch (clave) {
        case 1:
          impuesto = valor * 0.1; // 10% de impuesto
          impuestosPorCategoria.clave1 += impuesto;
          break;
        case 2:
          impuesto = valor * 0.07; // 7% de impuesto
          impuestosPorCategoria.clave2 += impuesto;
          break;
        case 3:
          impuesto = valor * 0.05; // 5% de impuesto
          impuestosPorCategoria.clave3 += impuesto;
          break;
        default:
          impuesto = 0; // Si la clave no coincide con ninguna categoría, no hay impuesto.
      }
  
      // Agregar el impuesto al total
      totalImpuestos += impuesto;
    }
  
    // Devolver resultados
    return {
      impuestosPorVehiculo: vehiculos.map((vehiculo, index) => ({
        vehiculo: index + 1,
        impuesto: vehiculo.clave ? vehiculo.valor * (vehiculo.clave === 1 ? 0.1 : vehiculo.clave === 2 ? 0.07 : 0.05) : 0,
      })),
      impuestosPorCategoria,
      totalImpuestos,
    };
  }
  
  // Ejemplo de uso:
  const vehiculos = [
    { clave: 1, valor: 20000 },
    { clave: 2, valor: 15000 },
    { clave: 1, valor: 25000 },
    { clave: 3, valor: 30000 },
    { clave: 2, valor: 12000 },
  ];
  
  const resultados = calcularImpuestos(vehiculos);
  
  console.log("Impuestos por vehículo:");
  console.log(resultados.impuestosPorVehiculo);
  console.log("Impuestos por categoría:");
  console.log(resultados.impuestosPorCategoria);
  console.log("Total de impuestos:");
  console.log(resultados.totalImpuestos);


  // Función para calcular el saldo actual de un cliente
function calcularSaldoActual(saldoAnterior, comprasRealizadas, pagoAnterior) {
    return saldoAnterior + comprasRealizadas - pagoAnterior;
  }
  
  // Función para calcular el pago mínimo de un cliente
  function calcularPagoMinimo(saldoActual) {
    const intereses = saldoActual * 0.12;
    const multa = 200;
    return Math.max(saldoActual * 0.15, saldoActual * 0.85 + intereses + multa);
  }
  
  // Función para calcular el pago para no generar intereses de un cliente
  function calcularPagoSinIntereses(saldoActual) {
    const intereses = saldoActual * 0.12;
    return saldoActual * 0.85 + intereses;
  }
  
  // Función para calcular el interés ganado con clientes morosos
  function calcularInteresGanado(clientes) {
    let interesGanado = 0;
    for (const cliente of clientes) {
      if (cliente.saldoActual < calcularPagoMinimo(cliente.saldoAnterior)) {
        interesGanado += cliente.saldoActual * 0.12;
      }
    }
    return interesGanado;
  }
  
  // Ejemplo de datos de clientes (reemplaza con tus datos reales)

  const clientes = [
    { saldoAnterior: 1000, comprasRealizadas: 500, pagoAnterior: 400 },
    { saldoAnterior: 1500, comprasRealizadas: 200, pagoAnterior: 1000 },
    // Agrega más clientes aquí si es necesario
  ];
  
  // Calcular datos para cada cliente
  for (const cliente of clientes) {
    cliente.saldoActual = calcularSaldoActual(
      cliente.saldoAnterior,
      cliente.comprasRealizadas,
      cliente.pagoAnterior
    );
  
    cliente.pagoMinimo = calcularPagoMinimo(cliente.saldoActual);
  
    cliente.pagoSinIntereses = calcularPagoSinIntereses(cliente.saldoActual);
  }
  
  // Calcular el interés ganado con clientes morosos
  const interesGanado = calcularInteresGanado(clientes);
  
  // Mostrar resultados
  console.log("Datos de clientes:");
  console.log(clientes);
  console.log("Interés ganado con clientes morosos: $" + interesGanado);
