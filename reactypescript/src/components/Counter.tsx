import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>
        <p>cups Ordered: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Order One More</button>
      </div>
    </>
  );
}
