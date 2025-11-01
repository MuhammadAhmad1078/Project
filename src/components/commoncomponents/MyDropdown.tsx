import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

interface DropdownItem {
  label: string;
  value: string;
}

interface MyDropdownProps {
  defaultLabel?: string;
  items: DropdownItem[];
  className?:string;
  onSelect?: (item: DropdownItem) => void;
}

const MyDropdown: React.FC<MyDropdownProps> = ({ defaultLabel = 'Select', items, onSelect, className }) => {
  const [selected, setSelected] = useState<string>(defaultLabel);

  const handleSelect = (item: DropdownItem) => {
    setSelected(item.label);
    onSelect?.(item);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`bg-[#152122] py-3 px-3 inline-flex items-center justify-between gap-4 text-sm rounded-sm ${className}`}>
        {selected} <img src="/assets/icons/caretdw.png" className='w-4' alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => handleSelect(item)}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { MyDropdown };
