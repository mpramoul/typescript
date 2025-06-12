// Tipos de datos
let movie: string = "El señor de los anillos 2";
let duration: number = 200;
let hasOscar: boolean = true;

movie = "La comunidad del anillo";
//movie = 123;

duration = 240;
//duration = 4 horas;

let myObject: object = {
  product: "Computer",
  price: 1234
}

let array01: Array<string> = ["luis","omar","maria"];

let myArray: number[] = [10,20,30];
myArray = [20,40,60];
myArray = [100,200];

let data: any = 999;
data="ahora es un string";
data=123;

console.log(`${movie} ${duration} Minutos`);
console.log(movie, duration,"Minutos", hasOscar);
console.log(myObject);
console.log(myArray);
console.log(data);
console.log(array01[0]);

//Tipos de datos u poco mas complejos
