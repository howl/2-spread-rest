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

/**
 * Ejercicio 5:
 * Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
 */
const onlyUniques = (...argumentos) => argumentos.filter((argumento, index, array) => array.indexOf(argumento) === index);

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

/**
 * Ejercicio 6:
 * Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
 */
const combineAllArrays = (...arrays) => arrays.flat();

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

/**
 * Ejercicio 7:
 * Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
 */
const sumAndSquare = (...numeros) => numeros.reduce((acc, val) => acc + val ** 2, 0);

console.log(sumAndSquare(1, 2, 3)); // 1^2 + 2^2 + 3^2 = 14
console.log(sumAndSquare(4, 5)); // 4^2 + 5^2 = 41
console.log(sumAndSquare(1, 2, 3, 4)); // 1^2 + 2^2 + 3^2 + 4^2 = 30
