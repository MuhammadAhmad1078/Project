import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // You can also use `clsx` or similar utility

type Props = {
  children?: ReactNode;
  direction?: string;
  justify?: string;
  items?: string;
  gap?: string;
  className?: string;
  onClick?: () => void;
};

const FlexBox: React.FC<Props> = ({
  children,
  direction = "flex-row",
  justify,
  items,
  gap,
  className,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "flex",
        direction,
        justify,
        items,
        gap,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { FlexBox };
