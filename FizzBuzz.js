// Si es múltiplo de 3, imprime "Fizz", múltiplo de 5, imprime "Buzz", múltiplo de ambos "FizzBuzz", 
// otro resultado, imprime el número actual de la variable

for (let i = 1; i <= 100; i++){
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0 && (i % 5 == 0) ) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}