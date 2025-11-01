// components/QuantityInput.tsx

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface QuantityInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

export const QuantityCounter = ({
  value,
  onChange,
  min = 1,
  max = Infinity,
}: QuantityInputProps) => {
  const [internalQty, setInternalQty] = useState<number>(min);
  const quantity = value !== undefined ? value : internalQty;

  const updateQty = (newQty: number) => {
    if (onChange) {
      onChange(newQty);
    } else {
      setInternalQty(newQty);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) updateQty(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > min) updateQty(quantity - 1);
  };

  return (
    <div className="flex items-center justify-between gap-3 w-44 border border-[#2E7A80] rounded-lg py-[6px] mt-5">
      <Button
        className="bg-transparent border-0 hover:bg-transparent cursor-pointer"
        disabled={quantity <= min}
        onClick={handleDecrement}
      >
        <img src="/assets/icons/minus.png" width={16} alt="decrease" />
      </Button>
      <Input
        value={quantity <= 9 ? `0${quantity}` : quantity}
        className="border-0 text-center focus:ring-0 focus-visible:ring-0"
        readOnly
      />
      <Button
        className="bg-transparent border-0 hover:bg-transparent cursor-pointer"
        disabled={quantity >= max}
        onClick={handleIncrement}
      >
        <img src="/assets/icons/plus.png" width={16} alt="increase" />
      </Button>
    </div>
  );
};
