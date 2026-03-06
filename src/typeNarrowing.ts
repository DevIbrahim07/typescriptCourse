// type narrowing ha ye kam he ki hum ek variable ki type ko aur specific bana sakte he
// jese ki union type me hum ek variable ko multiple types de sakte he
// lekin kabhi kabhi hume us variable ki type ko aur specific karna padta he
// taki hum us variable ke sath specific operations kar sake

function chai(kind: string | number) {
  if (typeof kind === "string") {
    return `A cup of ${kind} chai`;
  }
  return `chai oder ${kind}`;
}

function serveChai(chai: string | number) {
  if (typeof chai === "number") {
    return `Serving ${chai} cups of chai`;
  } else {
    return `Serving ${chai} chai`;
  }
}

// exhaustive checking kr rahe hai
function oderChai(order: "small" | "medium" | "large") {
  if (order === "small") {
    return "You odered small chai";
  }
  if (order === "medium" || order === "large") {
    return `You odered ${order} chai`;
  }
  return `Invalid order ${order}`;
}

// guard checking kr rahe hai
class masalaChai {
  Serve() {
    return "Serving masala chai";
  }
}

class adrakChai {
  Serve() {
    return "Serving adrak chai";
  }
}

function prepareChai(chai: masalaChai | adrakChai) {
  if (chai instanceof masalaChai) {
    return chai.Serve();
    // jo yaha pr masalaChai ka object he uska sath Serve method call hoga adrakChai ka nahi
  }
}

// apne khud k types create krne ka tariqa

type chaiType = {
  type: string;
  sugar: number;
};
type chaiTypeNew = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiType {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiType | string) {
  if (isChaiOrder(item)) {
    return ` serving ${item.type} chai with ${item.sugar} spoons of sugar`;
  }
}

// example of discriminated union
type gingerChai = {
  type: "masala";
  sugarLevel: number;
};
type lemonChai = {
  type: "lemon";
  amount: number;
};
type milkChai = {
  type: "milk";
  quantity: number;
};
type chai = gingerChai | lemonChai | milkChai;

function makeChai(order: chai) {
  switch (order.type) {
    case "masala":
      return "masala chai";
      break;
    case "milk":
      return "milk chai";
      break;

    case "lemon":
      return "lemon chai";
      break;
  }
}

type adrakChaiType = {
  type: "adrak";
  sugarLevel: number;
};

type elaichiChaiType = {
  type: "elaichi";
  sugarLevel: number;
};

type chaiTypeUnion = adrakChaiType | elaichiChaiType;

function makeNewChai(order: chaiTypeUnion) {
  if (order.type === "adrak") {
    return " you ordered adrak chai";
  }
  if (order.type === "elaichi") {
    return " you ordered elaichi wali chai";
  }
}
const makedChai = console.log(makeNewChai({ type: "elaichi", sugarLevel: 2 }));
