//Interfaces y Clases

//Interfaces
/*
interface Director{
  name: string;
  age: number;
  data: any;
}
const director1: Director = {
  name: "Luis",
  age: 42,
  data: "He is amazing"
}
console.log(director1);
*/

//Rehutilizar interface x un dato Generico
interface Director<T>{
  name: string;
  age: number;
  data: T;
}
const director1: Director<string> = {
  name: "Luis",
  age: 42,
  data: "He is amazing"
}
console.log(director1);




//objeto simple
/*
let persona={
  nombre: "Omar",
  apellido: "PEREZ",
  edad: 42
}
console.log(persona);

//objeto con type
type person={
  name: string,
  edad: number,
  alumno: boolean
} 

const alumno1: person = {
  name: "mpramoul",
  edad: 45,
  alumno: true
}

console.log(alumno1);
*/

//Interfaces y Clases

interface iProducto {
  nombre: string;
  categoria: string;
  precio: number;
  delivery: boolean;
  mostrarDelivery(): void;
}

class Producto implements iProducto{
  nombre: string;
  categoria: string;
  precio: number;
  delivery: boolean;
  constructor(
    nombre: string,
    categoria: string,
    precio: number,
    delivery: boolean
    )
  {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.delivery = delivery;
  }

  mostrarProducto(){
    return(`Nombre: ${this.nombre} Categoría ${this.categoria} Precio: ${this.precio}, Delivery: ${this.delivery}`);
  }
  mostrarDelivery(){
    return("Delivery");
  }

}

const cafeExpresso = new Producto("Express","Cafés", 5.50, true)
console.log(cafeExpresso);
console.log(cafeExpresso.mostrarDelivery());