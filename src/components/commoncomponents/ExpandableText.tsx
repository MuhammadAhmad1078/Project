"use client";

import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ExpandableTextProps {
  children: ReactNode;
  rows?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  children,
  rows = 3,
  className = "text-white",
  moreLabel = "Read more",
  lessLabel = "Read less",
}) => {
  const [expanded, setExpanded] = useState(false);

  const clampClasses: Record<number, string> = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6",
  };

  return (
    <div className={className}>
      <div
        className={`transition-all duration-300 ${
          expanded ? "line-clamp-none" : clampClasses[rows] || "line-clamp-2"
        }`}
      >
        {children}
      </div>

      <Button
        variant="link"
        className="mt-2 text-[#777E90] p-0"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? lessLabel : moreLabel}
      </Button>
    </div>
  );
};

export { ExpandableText };
