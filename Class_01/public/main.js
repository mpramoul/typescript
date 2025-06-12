"use strict";
console.log("Proyecto iniciaizado");
//Elementos del DOM
//let h1 = document.querySelector("h1");
//console.log(h1?.textContent);
let h1 = document.querySelector(".title");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
let title = document.querySelector(".title");
console.log(title.textContent);
let username = document.querySelector("#username");
console.log(username.placeholder);
//Genéricos
/*function primerElemento(array: number[] | string[]){
  return(array[0]);
}

const numArray = [10,20,30];
let x=primerElemento(numArray)

const stringArray = ["a","b","c"];
let y=primerElemento(stringArray)

console.log(x, y);
*/
//aqui el generico
function primerElemento(array) {
    return (array[0]);
}
const numArray = [10, 20, 30];
const stringArray = ["a", "b", "c"];
let x = primerElemento(numArray);
let y = primerElemento(stringArray);
console.log(x, y);
//Clases para POO
class Movie {
    constructor(title, duration, hasOscar) {
        this.title = title;
        this.duration = duration;
        this.hasOscar = hasOscar;
    }
    getInfo() {
        return (`Title: ${this.title} Duración: ${this.duration} Oscar: ${this.hasOscar}`);
    }
}
const movie1 = new Movie("EL señor de los anillos", 180, true);
const movie2 = new Movie("El gran hermano", 240, false);
console.log(movie1);
console.log(movie2);
console.log(movie1.getInfo());
class car {
    constructor(marca, modelo, traccion, color, precio, estado) {
        this.marca = marca;
        this.modelo = modelo;
        this.traccion = traccion;
        this.color = color;
        this.precio = precio;
        this.estado = estado;
    }
    muestraVehiculo() {
        return (`*Marca: ${this.marca} *Modelo: ${this.modelo} *Tracción: ${this.traccion} *Color: ${this.color} *Precio: ${this.precio} *Estado: ${this.estado}`);
    }
}
const vehiculo1 = new car("Nissan", "Qashqai", "4x2", "Gris", 25000, true);
console.log(vehiculo1);
console.log(vehiculo1.muestraVehiculo());
//Otra forma de crear una clase
class flower {
    //nombre: string;
    //hambiente: string;
    //diasAgua: number;
    //pertenece: string;
    constructor(nombre, hambiente, diasAgua, pertenece) {
        this.nombre = nombre;
        this.hambiente = hambiente;
        this.diasAgua = diasAgua;
        this.pertenece = pertenece;
        /*this.nombre = nombre,
        this.hambiente = hambiente,
        this.diasAgua = diasAgua,
        this.pertenece = pertenece*/
    }
    muestraFlower() {
        return (`Nombre ${this.nombre}  Hambiente ${this.hambiente}  DiasDagua ${this.diasAgua} Pertenece a: ${this.pertenece}`);
    }
}
const flor1 = new flower("Margarita", "Sombreado", 2, "mpramoul");
console.log(flor1.muestraFlower());
//Herencia
class product {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
    muestraProducto() {
        return (`Producto: ${this.nombre} Categoría: ${this.categoria} Precio: ${this.precio}`);
    }
}
const CafeExpress = new product("Express", "Cafés", 5.50);
console.log(CafeExpress);
class productDelivery extends product {
    constructor(nombre, categoria, precio, envio) {
        super(nombre, categoria, precio);
        this.envio = envio;
    }
}
const cafeCappu = new productDelivery("Cappuccino", "Cafes", 7.50, true);
console.log(cafeCappu);
console.log(cafeCappu.muestraProducto());
