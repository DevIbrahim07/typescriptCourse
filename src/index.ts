// example of type annotations in function
function greet(name: string): string {
  return `hello ${name}`;
}

const user: string = "ali";
console.log(greet(user));

let myVariable: number = 3;
myVariable = 2;
console.log(myVariable);

function add(left: number, right: number): number {
  return left + right;
}

add("hello", "world");

// Error:
// Argument of type 'string' is not assignable to parameter of type 'number'.

function multiply(a: number, b: number): number {
  return a * b;
}
const result = multiply(2, 3);
console.log(result);

// object type
// object types hm is liye use krte ha
function getAnswer(anyVariableName: { a: number; b: string }) {
  console.log(anyVariableName.a, anyVariableName.b);
}

getAnswer({ a: 3, b: 5 });
