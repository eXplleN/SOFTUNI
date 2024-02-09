function getFibonator() {
   let a = 1;
   let b = 0;
   let result = 0;

   function sum() {
    result = a + b;
        a = b;
        b = result;
        return result
   }
  return sum;
}

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13