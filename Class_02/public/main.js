"use strict";
//Interfaces y Clases
const director1 = {
    name: "Luis",
    age: 42,
    data: "He is amazing"
};
console.log(director1);
class Producto {
    constructor(nombre, categoria, precio, delivery) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.delivery = delivery;
    }
    mostrarProducto() {
        return (`Nombre: ${this.nombre} Categoría ${this.categoria} Precio: ${this.precio}, Delivery: ${this.delivery}`);
    }
    mostrarDelivery() {
        return ("Delivery");
    }
}
const cafeExpresso = new Producto("Express", "Cafés", 5.50, true);
console.log(cafeExpresso);
console.log(cafeExpresso.mostrarDelivery());
