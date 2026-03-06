import strict from "assert/strict";
import type { BlobOptions } from "buffer";
import { CONNREFUSED } from "dns";
import { Dir } from "fs";
import { get } from "http";

// 1
const username: string = "ali";
const age: number = 23;
const isStudent: boolean = true;
const skills: string[] = ["programming", "DSA"];

// 2

function greetUser(name: string): string {
  return `"Hello", ${name}`;
}
console.log(greetUser("Ibrahim"));

//3

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 4));

//4

function introduction(name: string, age?: number): string {
  if (age !== undefined) {
    return `My name is ${name} and I am ${age} years old`;
  }

  return `My name is ${name}`;
}
console.log(introduction("Ibrahim", 22));

//5

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`Your ID is ${id}`);
  } else {
    console.log(`Your ID number is ${id}`);
  }
}

console.log(printId(23));

// 6

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user1: User = {
  name: "ali",
  age: 22,
  isAdmin: true,
};

// 7

type Product = {
  id: number;
  name: string;
  price: number;
};

const arrayOfProducts: Product[] = [
  { id: 1, name: "mobile", price: 30000 },
  { id: 2, name: "laptop", price: 50000 },
  { id: 3, name: "Monitor", price: 3000 },
];

//8

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(3, 4));

//9

type MathOperation = (a: number, b: number) => number;

const addition: MathOperation = (a, b): number => {
  return a + b;
};
console.log(addition(3, 3));
const sub: MathOperation = (a, b): number => {
  return a - b;
};
console.log(sub(3, 3));
const mul: MathOperation = (a, b): number => {
  return a * b;
};
console.log(mul(3, 3));

// 10

type Car = {
  readonly id: number;
  brand: string;
};
const obj: Car = {
  id: 3,
  brand: "honda",
};
//obj.id = 2;
obj.brand = "civic";
console.log(obj);
// when we use readonly property with any value we cannot change its value after assigning fisrt time value. when we try to assign again new value to that we cannot able to do that. bcz we have used readonly property with that.

//11

type Person = { name: string };
type Employee = { employeeId: number };
//nesting
type Staff = {
  dep: Person;
  eName: Employee;
};

// intersection
type Stafff = Person & Employee;

const staff1: Stafff = {
  name: "ali",
  employeeId: 101,
};

//12

function setRole(role: "admin" | "user" | "guest"): string {
  return `Role set to ${role}`;
}

console.log(setRole("admin"));

// 13
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("ali"));
console.log(identity<number>(234));
console.log(identity<boolean>(true));

//14

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement<number>([40, 5, 6]));

// 15
type Users = {
  name: string;
  age: number;
};

function getProperty(obj: Users, key: keyof Users) {
  return obj[key];
}

console.log(getProperty({ name: "ali", age: 22 }, "name"));

// 16

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// function acceptDirection(dir: Direction): void {
//   return console.log(dir);
// }

// acceptDirection(Direction.Up);

//17

type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};
const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: {
    name: "ali",
    age: 22,
  },
};

//18

type Userss = {
  name: string;
  age: number;
  email: string;
};

type UpdateUser = Partial<Userss>;

const updateUser: UpdateUser = {
  name: "ali",
};
console.log(updateUser);

// 19

type UserPreview = Pick<Userss, "name" | "email">;

const preview: UserPreview = {
  name: "ali",
  email: "a@gmil.com",
};
console.log(preview);

// 20

type UserWithEmail = Omit<Userss, "email">;
const UserEmail: UserWithEmail = {
  name: "helo",
  age: 22,
};

console.log(UserEmail);
