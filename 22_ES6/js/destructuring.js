/**
 * ### DESTRUCTURING
 * Pode ser utilizado em arrays ou objetos.
 * A ideia é transformar os itens de um desses dados em variáveis
 * Simplificando a declaração de n variáveis ára apenas 1 linha!
 */

//Arrays
const fruits = ['Maçã', 'Laranja', 'Mamão'];
const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

//Objetos
const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
};

const {name: productName, price, category: productCategory, color} = productDetails;

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`);