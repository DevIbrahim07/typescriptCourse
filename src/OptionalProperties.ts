// Object Types
// Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

// For example, here’s a function that takes a point-like object:

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printNamee(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printNamee({ first: "Bob" });
printNamee({ first: "Alice", last: "Alisson" });

//In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
'obj.last' is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

// object type
function getAnswer(anyVariableName:{a:number,b:string}){
    console.log(anyVariableName.a,anyVariableName.b)
}