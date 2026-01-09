///////////////////GENERICS/////////////////////GENERICS/////////////////////GENERICS//////////////
// generics ka use hum tab krte hai jab hum chahte hai ki hum apne functions or classes ko
// zyada flexible banaye taaki wo alag alag data types ke sath kaam kr ske
// generics se hum ek hi function or class ko multiple data types ke sath use kr skte hai bina
// code ko repeat kiye
// in k areal work example api response mai , formstate mai etc

function makeChai<T>(item: T): T[] {
  return [item];
}
// ye sb teekh hai
makeChai("masala");
makeChai(25);
makeChai({ flavour: "ginger" });

// another example bwith generics
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  //return [b,a] // ye error dega kyuki return type me humne pehle A phir B diya he
}

pair("masala", 25);
pair(true, { flavour: "adrak" });

// we can maek generaci interfaces also
interface Box<T> {
  content: T;
}

const numberBox: Box<string> = { content: "This is a string in a box" };
const stringBox: Box<number> = { content: 12345 };
// but if i use we got error
// const wrongBox:Box<number> = {content: "This is a string in a box"}; // ye error dega kyuki
// content me string he aur Box me number type expect kr rha he

// another example with generics in api response
interface apiResponse<T> {
  status: number;
  data: T;
}
const res: apiResponse<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
// another example with generics in class,omit, partical etc
class Container<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  getItems(): T[] {
    return this.items;
  }
}

const stringContainer = new Container<string>();
stringContainer.addItem("chai");
stringContainer.addItem("coffee");
console.log(stringContainer.getItems());
const numberContainer = new Container<number>();
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItems());
// const wrongContainer = new Container<number>();
// wrongContainer.addItem("chai"); // ye error dega kyuki humne Container me number type diya he
// aur addItem me string type de rhe hain
///////////////////END OF GENERICS/////////////////////END OF GENERICS/////////////////////END OF GENERICS//////////////
