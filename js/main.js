/**
 * Ejercicio 1:
 * Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
 */
const sumEveryOther = (...numeros) => numeros.reduce((acc, val) => acc + val, 0);

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26
