import React from "react";
import { cn } from "@/lib/utils"; // Using cn() for better class merging

interface TextProps {
  children: React.ReactNode;
  fontSize?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | string;
  color?: string;
  weight?: "font-light" | "font-normal" | "font-medium" | "font-bold" | string;
  className?: string;
  onClick?: () => void;
  as?: "p" | "span" | "div"; // Add element type flexibility
}

const Text: React.FC<TextProps> = ({
  children,
  fontSize = "text-sm",
  color = "text-blue-gray",
  weight = "font-normal",
  className = "",
  onClick,
  as: Component = "p", // Default to p tag but allow override
}) => {
  return (
    <Component
      className={cn(
        fontSize,
        color,
        weight,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export { Text };