/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
    console.log("Ejecutando restar()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    const resultado = numero1 - numero2;
    mostrar(`${numero1} - ${numero2} = ${resultado}`);
    console.log("Resultado de la resta:", resultado);
}

function multiplicar() {
    console.log("Ejecutando multiplicar()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    const resultado = numero1 * numero2;
    mostrar(`${numero1} * ${numero2} = ${resultado}`);
    console.log("Resultado de la multiplicación:", resultado);
}

function dividir() {
    console.log("Ejecutando dividir()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    if (numero2 === 0) {
        mostrar("Error: no se puede dividir entre cero.", "danger");
        return;
    }

    const resultado = numero1 / numero2;
    mostrar(`${numero1} / ${numero2} = ${resultado}`);
    console.log("Resultado de la división:", resultado);
}

function potencia() {
    console.log("Ejecutando potencia()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    const resultado = numero1 ** numero2;
    mostrar(`${numero1} ** ${numero2} = ${resultado}`);
    console.log("Resultado de la potencia:", resultado);
}

function modulo() {
    console.log("Ejecutando modulo()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    if (numero2 === 0) {
        mostrar("Error: no se puede calcular el módulo con divisor cero.", "danger");
        return;
    }

    const resultado = numero1 % numero2;
    mostrar(`${numero1} % ${numero2} = ${resultado}`);
    console.log("Resultado del módulo:", resultado);
}


// EJERCICIO 2: COMPARACIONES

function cualEsMayor() {
    console.log("Ejecutando cualEsMayor()");

    const numero1 = leerNumero("numero1");
    const numero2 = leerNumero("numero2");

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        mostrar("Error: introduce los dos números.", "danger");
        return;
    }

    if (numero1 > numero2) {
        mostrar(`${numero1} es mayor que ${numero2}.`);
    } else if (numero1 < numero2) {
        mostrar(`${numero2} es mayor que ${numero1}.`);
    } else {
        mostrar("Los dos números son iguales.");
    }

    console.log("Comparación:", numero1, numero2);
}

function parOImpar() {
    console.log("Ejecutando parOImpar()");

    const numero1 = leerNumero("numero1");

    if (Number.isNaN(numero1)) {
        mostrar("Error: introduce el primer número.", "danger");
        return;
    }

    if (numero1 % 1 !== 0) {
        mostrar(`${numero1} tiene decimales: no es par ni impar.`, "warning");
        return;
    }

    const resultado = numero1 % 2 === 0 ? "par" : "impar";

    mostrar(`${numero1} es ${resultado}.`);
    console.log("Resultado par o impar:", resultado);
}


// VALIDACIÓN PARA LOS BUCLES

function validarRepeticiones() {
    const numero1 = leerNumero("numero1");

    if (
        Number.isNaN(numero1) ||
        !Number.isInteger(numero1) ||
        numero1 > MAXIMO_REPETICIONES
    ) {
        mostrar(
            `Error: introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`,
            "danger"
        );
        return NaN;
    }

    return numero1;
}


// EJERCICIO 3: BUCLES CON TEXTO

function bucleFor() {
    console.log("Ejecutando bucleFor()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    for (let i = 1; i <= repeticiones; i++) {
        anadirLinea(`for · repetición ${i} de ${repeticiones}`);
        contador++;
    }

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}

function bucleWhile() {
    console.log("Ejecutando bucleWhile()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    while (contador < repeticiones) {
        anadirLinea(`while · repetición ${contador + 1} de ${repeticiones}`);
        contador++;
    }

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}

function bucleDoWhile() {
    console.log("Ejecutando bucleDoWhile()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    do {
        contador++;

        anadirLinea(
            `do...while · repetición ${contador} de ${repeticiones}`
        );

    } while (contador < repeticiones);

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}


// EJERCICIO 4: BUCLES CON BADGES

function badgesFor() {
    console.log("Ejecutando badgesFor()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    for (let i = 1; i <= repeticiones; i++) {
        const color = i % 2 === 0 ? "success" : "primary";

        anadirBadge(i, color);
        contador++;
    }

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}

function badgesWhile() {
    console.log("Ejecutando badgesWhile()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    while (contador < repeticiones) {
        contador++;

        const color = contador % 2 === 0 ? "success" : "primary";

        anadirBadge(contador, color);
    }

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}

function badgesDoWhile() {
    console.log("Ejecutando badgesDoWhile()");

    const repeticiones = validarRepeticiones();

    if (Number.isNaN(repeticiones)) {
        return;
    }

    let contador = 0;

    do {
        contador++;

        const color = contador % 2 === 0 ? "success" : "primary";

        anadirBadge(contador, color);

    } while (contador < repeticiones);

    const texto = contador === 1
        ? "1 repetición"
        : `${contador} repeticiones`;

    anadirLinea(`Total: ${texto}`);
    console.log("Total de repeticiones:", contador);
}


