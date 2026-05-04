/**
 * Ejercicio 1:
 * Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
 */
const sumEveryOther = (...numeros) => numeros.reduce((acc, val) => acc + val, 0);

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

/**
 * Ejercicio 2:
 * Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
 */
const addOnlyNums = (...elementos) => elementos.filter(elemento => typeof elemento === 'number').reduce((acc, val) => acc + val, 0);

console.log(addOnlyNums(1, "perro", 2, 4)); //7

/**
 * Ejercicio 3:
 * Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
 */
const countTheArgs = (...argumentos) => argumentos.length;

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

/**
 * Ejercicio 4:
 * Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineTwoArrays = (array1, array2) => [...array1, ...array2];

console.log(combineTwoArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]
