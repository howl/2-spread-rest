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
