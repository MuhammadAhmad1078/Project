// components/ProposedBy.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  accountno: string;
  className?: string;
}

const truncateAddress = (addr: string) => {
  if (addr.length <= 10) return addr;
  return `${addr.slice(0, 5)}${".".repeat(8)}${addr.slice(-5)}`;
};

const MyMask: React.FC<Props> = ({ accountno,className }) => {
  return (
    <span className={cn("text-[#E2BF4B] text-xs",className)}>{truncateAddress(accountno)}</span>
  );
};

export {MyMask}
