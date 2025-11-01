'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface CheckboxWithLabelProps {
  id: string;
  label: string;
  className?: string;
  labelClassName?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const MyCheckbox = ({
  id,
  label,
  className,
  labelClassName,
  checked,
  onCheckedChange,
  disabled,
}: CheckboxWithLabelProps) => {
  return (
    <div className={cn("flex items-center space-x-2",)}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={`h-4 w-4 rounded border-1 border-white data-[state=checked]:bg-[#0C666A] data-[state=checked]:border-[#0C666A] ${className}`}
      />
      <Label
        htmlFor={id}
        className={cn(
          "text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          labelClassName
        )}
      >
        {label}
      </Label>
    </div>
  );
};
