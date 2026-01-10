import type { PropsWithChildren, ReactNode } from "react";

// yaha pr humne Card component ke liye props define kiye hain k kese props with children
// handle karne hain typeScript me. jo children hote hain wo ReactNode type ke hote hain.and ye compulsory hate hai

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <div>
      <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
      </section>
    </div>
  );
}
