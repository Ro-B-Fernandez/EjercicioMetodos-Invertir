let dimension: number = Number(
  prompt("Ingrese la cantidad de números que desea invertir:")
);
let num: number[] = new Array(dimension);
let indice: number;

for (indice = 0; indice < dimension; indice++) {
  num[indice] = Number(
    prompt("Ingrese el valor en la posicion [" + indice + "]: ")
  );
}

let cadena: string = "";
for (indice = dimension - 1; indice >= 0; indice--) {
  cadena = cadena + num[indice] + "";
}
console.log("Los números del último al primero son: " + cadena);
