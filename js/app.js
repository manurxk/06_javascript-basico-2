console.log("Holis");
//crear variables
let universidad ="utic"; //string
//typeof muestra el tipo de dato
console.log(typeof(universidad));
let edad = 45; //
console.log(typeof(edad));
debugger;
let pi = 3.14;
console.log(typeof(pi));
let soyMillonario = false;
console.log (typeof(soyMillonario));

//arreglo o vector o matriz
let arreglo = [
    universidad,edad
    , pi,soyMillonario

];
const noBasta = "Si basta, el vasto , con el paso";
noBasta = "66666";
console.log(arreglo);
// length, muestra cantidad o arreglo o vector
console.log(arreglo.length);

//recorridos
for(let i=0; i<arreglo.length; i++){
    debugger; //para la ejecucion en esta linea
    console.log(arreglo[i]);
}