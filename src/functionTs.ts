// working with functions in typescript
// type annotations in function parameters and return types

function makeChai(type: string, cups: number) {
  console.log(`making ${cups} cups of ${type} chai`);
}
makeChai("masala", 3);

// another example with return type
function getChaiPrice(): number {
  return 3;
}
// this gets error
// function order(order: string): string {
//   if (!order) return null;
//   return order;
// }

// with void return type mean koi value return nahi karega
function orderChai(): void {
  console.log("Chai ordered");
}

// optional parameter
function newChai(chai?: string) {
  console.log("with optional parameter chai");
}
// default parameter
function newChaiWithDefaultValue(chai: string = "masala") {
  console.log("with default value");
}

// with multiple parameters with return and clg
function createNewChai(order: {
  type: string;
  quantity: number;
  isHot: boolean;
}): number {
  // console.log("chai created");
  return 5;
}
