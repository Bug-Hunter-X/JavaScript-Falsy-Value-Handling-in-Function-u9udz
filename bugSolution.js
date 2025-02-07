function foo(a, b) {
  // Check if both inputs are numbers using Number.isFinite()
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return 0; //Handle non-numeric or non-finite inputs 
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, 0)); // Output: 1
console.log(foo('',2)); //Output: 0
console.log(foo(1,'')); //Output: 0