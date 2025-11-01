'use client';

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { cn } from '@/lib/utils';

interface Option {
  id: number | string;
  name: string;
}

interface MySelectProps {
  withoutForm?: boolean;
  name?: string;
  label?: string;
  mode?: 'single' | 'multiple'; 
  disabled?: boolean;
  required?: boolean;
  message?: string;
  value?: string;
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const MySelect: React.FC<MySelectProps> = ({
  withoutForm = false,
  name,
  label,
  disabled = false,
  required = false,
  message = 'This field is required',
  value = '',
  options,
  placeholder = 'Select an option',
  onChange,
  className,
}) => {
  const form = useFormContext();
  const showLabel = !withoutForm && name && label && form?.control;

  if (withoutForm || !form?.control || !name) {
    return (
        <Select
          onValueChange={onChange}
          defaultValue={value}
          disabled={disabled}
        >
          <SelectTrigger className={cn(
            "rounded-xs h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0 w-full",
            className
          )}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent side="top">
            {options?.map((opt) => (
              <SelectItem key={opt.id} value={opt.id.toString()}>
                {opt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
    );
  }

  return (
    <Controller
      name={name}
      control={form.control}
      rules={{ required: required ? message : false }}
      render={({ field }) => (
        <FormItem className='gap-1'>
          {showLabel && (
            <FormLabel className="text-sm font-medium pb-1">
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger className={cn(
                "rounded-xs min-h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0 w-full",
                className
              )}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent side="top">
              {options?.map((opt) => (
                <SelectItem key={opt.id} value={opt.id.toString()}>
                  {opt.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors[name] && (
            <FormMessage>
              {form.formState.errors[name]?.message?.toString()}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};