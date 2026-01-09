// interface mean signature . mean more types ho skti hai.
// like same types repeat ho rahi hai to we can use interface
// interfaces are used to define the structure of an object
// interfaces can be extended and implemented
// interfaces support declaration merging
interface chaiOrder {
  type: string;
  sugar: number;
  amount: boolean;
}
function makeChai(order: chaiOrder) {
  console.log("order has been made", order);
}

function serveChai(order: chaiOrder) {
  console.log("order has been served", order);
}

// type response = { ok: true } | { ok: false };
// always use interface over type when we are using classes bcz classes can implement interfaces
interface response {
  ok: true | false;
}
class okRes implements response {
  ok: true = true;
}

// next (or ki traha work kre ga | union ) literal types
type teaType = "masala" | "adhrak" | "ginger";

function orderTea(t: teaType) {
  console.log("tea ordered of type ", t);
}

// using intersection types & dono types ani chahiye  mean teaLeaves
// and teaLeaves dono use krni pre gi wrna error ayega
type baseChai = { teaLeaves: number };
type extraChai = { extraSpices: boolean };

type fullChai = baseChai & extraChai;

const cup: fullChai = {
  teaLeaves: 5,
  extraSpices: true,
};

// new examples here bio is optional property

type user = {
  name: string;
  bio?: string;
};

const user1: user = {
  name: "ali",
};
const user2: user = {
  name: "usama",
  bio: "developer",
};
