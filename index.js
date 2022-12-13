var prompt = require('prompt-sync')();

var lado1 = parseInt(prompt('Valor do lado 1: '));
var lado2 = parseInt(prompt('Valor do lado 2: '));
var lado3 = parseInt(prompt('Valor do lado 3: '));

//O comprimento de cada lado de um triângulo é menor que a soma dos comprimentos dos outros dois lados.
if((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)){
  if ((lado1 == lado2) && (lado2 == lado3)) {
      console.log('\nTriângulo Equilátero!');
  } else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)){
      console.log('\Triângulo Isóceles!')
  } else {
      console.log('\nTriângulo Escaleno!')
  }
} else {
  console.log('Os lados não formam um triângulo!')
}