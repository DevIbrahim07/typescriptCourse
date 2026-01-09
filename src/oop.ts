// working with oop concepts
// classes
class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai("ginger", 20);
{
  masalaChai.flavour = "masala";
}

// accesss modifiers

class ChaiAccess {
  public flavour: string = "masala";
  private secretIngredient: string = "cardamom";
  reveal() {
    this.secretIngredient; //ok
  }
}

const newChai = new ChaiAccess();
{
  newChai.reveal();
}

class Shop {
  protected shopName = "chai point";
}
class Branch extends Shop {
  getShopName() {
    return this.shopName; // ok
  }
}

class walet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const myWalat = new walet();

// readonly modifier
class ChaiReadOnly {
  readonly capacity: number = 100;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
