const products = [
    { id: 1, name: "Product-1", price: 10.99, amount: 20 },
    { id: 2, name: "Product-2", price: 24.99, amount: 15 },
    { id: 3, name: "Product-3", price: 5.99, amount: 30 },
    { id: 4, name: "Product-4", price: 19.99, amount: 10 },
    { id: 5, name: "Product-5", price: 14.99, amount: 25 }
];

/*
El metodo some() prueba si por lo menos hay un elemento que responda a la sentencia
Devuelve verdadero si en la matriz, encuentra por lo menos un elemento; de lo contrario devuelve falso.*/

const someProduct = products.some(product => product.price === 10.99);
console.log(someProduct);