// working with arrays in typescript
/////////////////////////ARRAYS/////////////////////ARRAYS/////////////////////ARRAYS///////////////
// old way to declear array types
const chaiFlavours: string[] = ["masala", "adrak"];
// const chaiFlavours :string[] = ["masala","adrak",3] got error bcz it is specific to just strings
const pricing: number[] = [22, 35, 500];
// const pricing:number[]= [22,35,500 ,"chaiii"] same here got error bcz it is specific to jsut numbers

// new way to declear array types
const ratig: Array<number> = [12, 13, 14];

// example of array of objects
type Chai = {
  name: string;
  price: number;
};

const cupsOfChai: Chai[] = [
  { name: "masala", price: 45 },
  { name: "adrakh", price: 30 },
];
// cupsOfChai.push()

// example with readonly . cannot be modified
const cities: readonly string[] = ["lahore", "karachi"];
// cities.push("multan") got errror bcz of readonly . cannot be modified

// multidimentional arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//////////////////////////TUPLES////////TUPLES///////////////TUPLES//////////////////////////
// tuple mai multiple datatype values ho skti hai . order matters a lot in tuple .
// if we define first string then number . so valuse should be written like first of all
//  with string then numbers

let chaiTuple: [string, number] = ["masala", 45];
// chaiTuple = [ 30,"adrak"] got error bcz of order matters in tuple;
chaiTuple.push("adrak"); // push is allowed in tuple

// with optional values in tuple
let newChaiTuple: [string, number?] = ["masala"];
newChaiTuple = ["adrak", 30];

// with readonly tuple
let readOnlyTuple: readonly [number, number] = [1, 2];
// readOnlyTuple.push(3) got error bcz of readonly tuple

// named tuples
let chaiItems: [name: string, leaves: number] = ["masala", 4];

/////////////////////////ENUMS/////////////////////ENUMS/////////////////////ENUMS/////////////////////
// enum is a special "class" that represents a group of constants (unchangeable variables).
// by default , enums are number based , starting at 0

enum cupSize {
  small,
  medium,
  large,
}
const cups = cupSize.medium; // 1

// we can also assign string values to enum
enum teaSize {
  small = "SMALL",
  medium = "MEDIUM",
  large = "LARGE",
}
const teaCup = teaSize.large; // "LARGE"

// autoimcremented enum
enum autoIncrementEnum {
  first = 5,
  second, // 6
  third, // 7
}
const autoEnumValue = autoIncrementEnum.second; // 6

enum makeChai {
  MASALA = "masala",
  GINGER = "ginger",
}
function prepareChai(type: makeChai) {
  console.log(`prepare ${type}`);
}
prepareChai(makeChai.MASALA);
//  prepareChai("masala") got error bcz only enum values are allowed

// heterogeneous enum

enum heterogeneousEnum {
  NO = 0,
  YES = "YES",
}
const heterogeneousValue = heterogeneousEnum.YES; // "YES"

// const heterogeneousValue2 = heterogeneousEnum.NO; // 0

const enum ConstEnum {
  PI = 3.14,
  EULER = 2.71,
}
const constEnumValue = ConstEnum.PI; // 3.14
