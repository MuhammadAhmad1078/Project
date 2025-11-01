'use client'

import React, { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { ButtonSecondary } from './ButtonSecondary';

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch?: (query: string) => void;
  className?: string;
  inputClassName?: string;
  defaultValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search services e.g. Logo design, Web development...',
  buttonLabel = 'Search',
  onSearch,
  className,
  inputClassName,
  defaultValue = ''
}) => {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex items-center gap-3 bg-white rounded-sm p-2', className)}
    >
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'placeholder:text-[#777E90] text-black border-0 bg-transparent w-full py-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0',
          inputClassName
        )}
      />
      <ButtonSecondary type="submit" className="hover:!bg-[#0C666A]">
        {buttonLabel}
      </ButtonSecondary>
    </form>
  );
};

export {SearchBar};
