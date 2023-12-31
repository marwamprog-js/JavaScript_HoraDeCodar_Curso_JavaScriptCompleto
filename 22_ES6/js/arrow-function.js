//  2 - Arrow function
const sum = function sum(a, b) {
    return a + b;
}

//primeira forma
// const arrowSum = (a, b) => {
//     return a + b;
// }

//segunda forma
const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
    if(name) {
        return `Olá ${name}!`
    } else {
        return "Olá";
    }
}

console.log(greeting("Marcus"));
console.log(greeting());

const testeArrow = () => console.log("Testou!");
testeArrow();

const user = {
    name: "Theo",
    sayUserName() {
        var self = this;
        setTimeout(function() {
            console.log(this);
            console.log('Username: ' + self.name);
        }), 500;
    }, 
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log('Username: ' + this.name);
        }), 500;
    }
}

user.sayUserName();
user.sayUserNameArrow();