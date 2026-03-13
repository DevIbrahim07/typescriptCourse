import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import type { Chai } from "./types";
import { OrderFrom } from "./components/OrderFrom";
import { Card } from "./components/Card";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 30 },
  { id: 2, name: "ginger", price: 50 },
  { id: 3, name: "lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        {" "}
        <ChaiCard name="Iphone " price={5000} />
        <ChaiCard name="HeadPhone " price={5000} />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderFrom
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups);
          }}
        />
      </div>

      <div>
        <Card title="chai and typescript" footer={<button>order now</button>} />
      </div>
    </>
  );
}

export default App;
