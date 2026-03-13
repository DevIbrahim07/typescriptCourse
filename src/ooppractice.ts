//1
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
console.log(person1);
person1.introduce();

//2
class Car {
  brand: string;
  speed: number;
  color: string;

  constructor(brand: string, speed: number, color: string) {
    this.brand = brand;
    this.speed = speed;
    this.color = color;
  }

  start() {
    console.log(this.brand + " started");
  }
}

const car1 = new Car("Toyota", 120, "red");
car1.start();
console.log(car1);

// 3

class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}

const Human2 = new Human("Ali", 23);
Human2.introduce();
console.log(Human2);

//4

class car2 {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  carInfo() {
    console.log(`${this.brand} ${this.model} ${this.year}`);
  }
}
const car3 = new car2("Toyota", "Corolla", 2022);
car3.carInfo();

//5

class Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  add() {
    const addition = this.a + this.b;
    console.log(`${addition}`);
  }
  substract() {
    const substruction = this.a - this.b;
    console.log(`${substruction}`);
  }

  multipy() {
    const multiplication = this.a * this.b;
    console.log(`${multiplication}`);
  }
}

const calc = new Calculator(5, 9);
calc.add();
calc.substract();
calc.multipy();

//6 Encapsulation
class BankAccout {
  accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("INsufficient balance");
    } else {
      this.balance -= amount;
    }
  }
  checkBalance() {
    if (this.balance === 0) {
      console.log(` balance is insufficient`);
    } else {
      console.log(` your balance is ${this.balance}`);
    }
  }
}

const bank = new BankAccout("ali", 0);
bank.checkBalance();

// 7 inheritence

class Animal {
  makeSound() {
    console.log("Animal sounds");
  }
}

class Dog extends Animal {
  barks() {
    console.log(`Dog barks`);
  }
}

class Cat extends Animal {
  meows() {
    console.log(`cat meowsss`);
  }
}

const behaviour = new Cat();
//behaviour.barks();
behaviour.meows();

// 8 student grade system

class Student {
  name: string;
  marks: number;

  constructor(name: string, marks: number) {
    this.marks = marks;
    this.name = name;
  }

  getGrade() {
    this.marks >= 90 ? console.log("passed") : console.log("fa");

    if (this.marks >= 80) {
      console.log("A");
    } else if (this.marks >= 60) {
      console.log("B");
    } else if (this.marks >= 40) {
      console.log("C");
    } else if (this.marks <= 40) {
      console.log("Fail");
    }
  }
}

const result = new Student("Ali", 99);
result.getGrade();

// 9
type Product = {
  name: string;
  price: number;
};
class ShoppingCart {
  product: Product[] = [];

  addProduct(name: string, price: number) {
    this.product.push({ name, price });
  }
  //   removeProduct(name: string) {
  //     this.product.unshift(name);
  //   }
  getTotal() {
    let total = 0;
    for (let product of this.product) {
      total += product.price;
    }
    console.log(total);
  }
}

const cart = new ShoppingCart();
cart.addProduct("Shoes", 3000);
cart.addProduct("Shirt", 1500);
cart.getTotal();

// 10

class User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;

  constructor(id: string, name: string, email: string, isLoggedIn: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isLoggedIn = isLoggedIn;
  }

  login() {
    this.isLoggedIn === true;
    console.log(`you are ${this.name} and you have successfully loggedd in`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`you are ${this.name} and you have successfully logged out`);
  }
}
const user1 = new User("1", "ali", "test@gmail.com", false);
user1.login();
user1.logout();

// 11

class TodoList {
  todos: string[] = [];

  constructor() {
    this.todos = [];
  }

  addTask(task: string) {
    this.todos.push(task);
  }
  removeTask(task: string) {
    this.todos = this.todos.filter((t) => t !== task);
  }
  showTasks() {
    console.log(this.todos);
  }
}

const todoList = new TodoList();
todoList.addTask("Buy Burger");
todoList.addTask("Go to Gym");
todoList.showTasks();
todoList.removeTask("Go to Gym");
todoList.showTasks();

// 12

type Product2 = {
  id: string;
  name: string;
  price: number;
};

class Cart {
  products: Product2[] = [];

  constructor() {
    this.products = [];
  }

  addProduct(id: string, name: string, price: number) {
    this.products.push({ id, name, price });
  }
  removeProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }
  getTotal() {
    let total = 0;
    for (let product of this.products) {
      total += product.price;
    }
    console.log(total);
  }
}

const cart2 = new Cart();
cart2.addProduct("1", "shoes", 2400);
cart2.addProduct("2", "shirt", 1500);

cart2.getTotal();
cart2.removeProduct("1");
cart2.getTotal();

/// 13 interfaces
// Interface use karte waqt implements keyword use karte hain

interface Useers {
  id: number;
  name: string;
  email: string;
}

class Admin implements Useers {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// 14 abstract class
// Abstract class ek half completed class hoti hai.

// Iska matlab:

// kuch methods ready hote hain

// kuch methods child class me implement hote hain
