// mensaje de bienvenida al usuario
alert("Calculadora de años");

// se pide a usuario ingresar una cantidad de días
let cantidad = prompt("Ingrese el número de días que desea calcular");

// se realiza cálculo de fechas
let anios = Math.floor(cantidad / 365);
let semanas = Math.floor((cantidad % 365)/7);
let dias = cantidad - (anios * 365 + semanas * 7);

// se muestran resultados en años, semanas y días
alert(`Los días ingresados equivalen a: ${anios} años, ${semanas} semanas, ${dias} días`);