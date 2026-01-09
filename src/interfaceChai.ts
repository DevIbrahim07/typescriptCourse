// interface ka mtlb he shap dena ya design dena
// interface ek aisa structure provide krta he jisme hum properties or methods define kr skte he
// interface ka use hum type checking ke liye krte he taaki hum apne code ko zyada robust
// or error-free bana ske
interface chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: chai = {
  flavour: "masala",
  price: 20,
};

// with readonly

interface shop {
  readonly name: string;
  price: number;
}
const myShop: shop = {
  name: "food",
  price: 100,
};
// myShop.name = "clothes" // ye error dega kyuki name property readonly he

// interface with function

interface discountCalculator {
  (price: number): number;
}
const calculateDiscount: discountCalculator = (p) => p * 5;

// methods in interface
interface teaMachine {
  start(): void;
  stop(): void;
}

const newMachine: teaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// indexing with interface
interface inventory {
  [itemCode: number]: string;
}
const storeInventory: inventory = {
  101: "tea",
  102: "coffee",
  103: "snacks",
};

// interfaces merge ho jate hai. like ap ka code a interface and koi library ka code b interface
// ho to dono merge ho jate hai
// from your code
interface User {
  name: string;
}
// from any extrnal library
interface User {
  age: number;
}
const u: User = {
  name: "ali",
  age: 30,
};

// interface extend kr skte hai
interface A {
  a: string;
}
interface B {
  b: string;
}
interface c extends A, B {}
