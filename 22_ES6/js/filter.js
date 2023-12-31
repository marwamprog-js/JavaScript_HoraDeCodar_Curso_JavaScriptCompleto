/**
 * ### FILTER
 * Serve para extrair dados de um array criando um novo array.
 * Não modifica array original, apenas extrai e cria um novo array.
 */

const arr = [1,2,3,4,5]

const highNambers = arr.filter((n) => {
    if( n >= 3 ) {
        return n;
    }
})

console.log(highNambers);

const users = [
    { name: 'Matheus', available: true },
    { name: 'Pedro', available: false },
    { name: 'João', available: false },
    { name: 'Marcos', available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);