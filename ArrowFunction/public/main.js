"use strict";
function lineadiv() {
    console.log("-----------Otra cosa---------");
}
function holaMundo() {
    console.log("Hola mundo functions arrow...");
}
holaMundo();
lineadiv();
//--------------------------------------------
const b = function () {
    console.log("Segunda forma de funciones, declarando una constante...");
};
b();
lineadiv();
//--------------------------------------------
const c = () => {
    return ("Function ArrowFunction simple");
};
console.log(c());
lineadiv();
//--------------------------------------------
const d = (x, y) => {
    return (x + y);
};
console.log(`ArrowFunction con suma de variables de entrada 2 y 3: ${d(2, 3)}`);
lineadiv();
//--------------------------------------------
const r = (x, y) => x + y;
console.log("Si tuviera una sola linea de code en la funcion.");
console.log(r(3, 4));
