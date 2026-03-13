import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function OrderFrom({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">chai name</label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label htmlFor="">chai Cups</label>
        <input
          type="number"
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
          }
        />
        <button type="submit">place order</button>
      </form>
    </div>
  );
}
