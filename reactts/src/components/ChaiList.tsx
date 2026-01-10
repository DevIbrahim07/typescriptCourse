import type { Chai } from "../types";
import { ChaiCard } from "./ChaiCard";

interface ChaiListProps{
    items:Chai[]
}
export function ChaiList({items}:ChaiListProps) {
  return (
    <div>
      {items.map((Chai)=>(
        <ChaiCard
        key={Chai.id}
        name={Chai.name}
        price={Chai.price}
        isSpecial = {Chai.price >30}
        />
      ))}
    </div>
  );
}

export default ChaiList;
