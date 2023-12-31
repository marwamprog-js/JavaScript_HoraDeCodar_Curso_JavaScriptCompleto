class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product('Camisa gola v', 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis Verde", 120);
console.log(tenis.productWithDiscount(20));

//herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ['Preto', 'Azul', 'Verde']);

console.log(hat.name);
console.log(hat.productWithDiscount(20));
console.log(hat.showColors());