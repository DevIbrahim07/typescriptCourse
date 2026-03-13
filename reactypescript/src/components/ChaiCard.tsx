interface ChaiCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
  return (
    <>
      {name}
      <br />
      {price}
      {isSpecial}
    </>
  );
}
