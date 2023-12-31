/**
 * ### Spread operator (...)
 * Pode ser utilizados em arrays e objetos.
 * Utilizamos para constituir valores destes dados em outros arrys e objetos
 * Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro
 */

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];
console.log(a4);

const carName = {name: 'Gol'};
const carBrand = {brand: 'VW'};
const otherInfos = {km:10000, price: 49000};

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car);