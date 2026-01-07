// uniontype can hold multiple types of values
let subs: string | number = "1Million";
let users: number | boolean = 12500;
let apiRequestStatus: "pending" | "success" | "end" = "success";
apiRequestStatus = "end";
//  apiRequestStatus = "started"  Error: Type '"started"' is not assignable to type '"pending" | "success" | "end"'.

// any type can hold any type of value
let orders = ["1", "2", "3"];
// let currentOrder;
// let currentOrder: any type ka he yaha pr
// so we use
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "2") {
    currentOrder = order;
  }
}

console.log(currentOrder);
//  currentOrder: string[] | undefined wali type ka ha yaha pr
