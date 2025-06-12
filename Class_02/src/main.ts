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
