// type inferencing in ts mean ts can automatically infer the type of a variable based on the value assigned to it.
let name = "ali";
let rollNumber = 24;
const isAdmin = true;
let cup = Math.random() > 0.5 ? 5 : "hello";

// type annotations in ts means explicitly specifying the type of a variable, function parameter, or return value.
let age: number = 24;
let nameofUser: string = "ahmad";
function add(a: number, b: number): number {
  return a + b;
}
