// now work with object types in ts
//  ts main object types ko handle kr sakta hai through different tariqe se

// direct object declaration

const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// {
//   name;
//   string;
//   price: number;
//   isHot: boolean;
// }
// declear object type
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger  tea",
  price: 15,
  isHot: true,
};

// through alias type

type newTea = {
  name: string;
  price: number;
  ingredients: string[];
};

const newChai: newTea = {
  name: "adrak chai",
  price: 30,
  ingredients: ["teaLeaves", "patti", "adrak"],
};

// through duck typing example
// is se bhi error nai aye ga kyuki largeCup me jo extra property hai wo ignore kr di jay gi
type cup = { size: string };
let smallCup: cup = {
  size: "200ml",
};
let largeCup = {
  size: "500ml",
  material: "steel",
};
smallCup = largeCup;

// another
// brew wali example mai bhi errror nai aye ga kyuki coffee object me jo extra property hai
// wo ignore kr di jay gi
type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabic" };
const newBrew: Brew = coffee;

// new exmaple with data types ko split kr k alag alag rakhna
type item = { name: string; price: number };
type address = { city: string; pin: number };

type order = {
  id: string;
  items: item[];
  address: address;
};

// another exmaple with partial type like data type kisi trha define krna but un
// ko different tariqa se use krna
// even yaha pr bhi error nai de raha updateChai({});with empty object. hm partialy hi
//  update kr rhy hain
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
const updateChai = (updatedChai: Partial<Chai>) => {
  console.log("chai updated", updatedChai);
};

updateChai({
  name: "lemon chai",
  price: 5,
});
updateChai({
  isHot: false,
});
updateChai({});

// another example with required property. we use it when hum chahte hain k object ki sari
//  properties required hon even name?: string;ye bhi optional ho ga the phir bhi required ho ga
type Snack = {
  name?: string;
  price?: number;
  isVeg: boolean;
};
// yaha pr hmne isVeg ko required kr diya hai
const orderSnack = (snack: Required<Snack>) => {
  console.log("snack ordered", snack);
};
orderSnack({
  name: "samosa",
  price: 20,
  isVeg: true,
});

// precisely pic krna values ko through Pick type
type Beverage = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

// yaha pr hmne sirf name and price ko pick kiya hai
const getBeverageInfo = (beverage: Pick<Beverage, "name" | "price">) => {
  console.log("beverage info", beverage);
};

getBeverageInfo({
  name: "coffee",
  price: 30,
});

// new example with omit type jismein hum kuch properties ko chhod k baaki sab use kr sakte hain
type MenuItem = {
  name: string;
  price: number;
  isAvailable: boolean;
  category: string;
};
const updateMenuItem = (item: Omit<MenuItem, "isAvailable">) => {
  console.log("menu item updated", item);
};
updateMenuItem({
  name: "paneer tikka",
  price: 150,
  category: "starter",
});
