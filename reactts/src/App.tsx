import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import type { Chai } from "./types.ts";
import { ChaiList } from "./components/ChaiList.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 25 },
  { id: 2, name: "ginger", price: 50 },
  { id: 3, name: "lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>Hello, React with TypeScript!</h1>
        <ChaiCard name="masala Chai" price={10} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("order Placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Masala Chai" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
