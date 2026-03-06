//1 Basic Type Function

import type { read } from "fs";
import { stringify } from "querystring";

type addNumber = {
  a: number;
  b: number;
};
function addTwoNumber(a: number, b: number): number {
  const result = a + b;
  return result;
}
console.log(addTwoNumber(5, 3));

//2 find String Length

function getLenth(a: string) {
  return a.length;
}

console.log(getLenth("hello"));

// 3 find Array Sum

function sumArray(a: number[]): number {
  let sum = 0;
  //   for(let i=0;i<a.length ; i++){
  //     return sum += a[i]
  //   }

  a.forEach((item) => {
    sum += item;
  });
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

//4 Interface Practice
interface Item {
  desc: string;
  amount: number;
}

const item: Item[] = [
  {
    desc: "senior",
    amount: 33,
  },
  {
    desc: "adult",
    amount: 35,
  },
];
const totalAmount: number = item
  .map((item) => item.amount)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalAmount);

// 5 interface practice

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function userData(data: User) {
  return data;
}
const result = userData({
  name: "ali",
  age: 23,
  isAdmin: true,
});
console.log(result);

//6 Optional Property

interface Product {
  name: string;
  price: number;
  description?: string;
}

function productInfo(info: Product) {
  return info;
}

const final = productInfo({
  name: "mobile",
  price: 40000,
});

console.log(final);

//7 union typed

function unionTyped(a: number | string) {
  return a;
}
console.log(unionTyped("hello"));
console.log(unionTyped(3));

//8 generics

function genFun<T>(a: T): T {
  return a;
}

console.log(genFun(30));
console.log(genFun("this is generic function"));

//9 array generics

// function getFirst<T>(a: T[]): T[] | undefined {
//   return a.length > 0 ? a[0] : undefined;
// };
// const number: number[] = [10, 233, 3];
// console.log(getFirst(number));

// 9 using destructuing array

const colors: string[] = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

// 10  type guard

function checkType(a: string | number) {
  if (typeof a === "string") {
    return "this is string";
  } else {
    return "this is number";
  }
}
console.log(checkType(2));

// 11

type ReadOnlyProperty = {
  name: string;
  age: number;
};
const object: Readonly<ReadOnlyProperty> = {
  name: "ali",
  age: 33,
};
console.log(object);

//12 Pick Utility Type

interface Users {
  id: number;
  names: string;
  email: string;
  password: string;
}

type BasicUser = Pick<Users, "id" | "names">;

const user: BasicUser = {
  id: 121,
  names: "dummy",
};
