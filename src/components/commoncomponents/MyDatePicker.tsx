'use client';

import * as React from 'react';
import { CalendarIcon } from 'lucide-react';
import { useFormContext, Controller, FieldValues, FieldError } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';

type DateRange = {
  from: Date;
  to: Date;
};

type MyDatePickerProps = {
  name?: string;
  label?: string;
  required?: boolean;
  message?: string;
  withoutForm?: boolean;
  range?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  locale?: string;
};

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  name,
  label,
  required = false,
  message = 'This field is required',
  withoutForm = false,
  range = false,
  placeholder = 'Pick a date',
  className,
  disabled = false,
  locale = 'en-US',
}) => {
  const form = useFormContext<FieldValues>();
  const showLabel = !withoutForm && name && label && form?.control;

  const renderLabel = (value: Date | DateRange | undefined | null): React.ReactNode => {
    if (range) {
      const rangeValue = value as DateRange | undefined;
      if (rangeValue?.from && rangeValue?.to) {
        return `${rangeValue.from.toLocaleDateString(locale)} - ${rangeValue.to.toLocaleDateString(locale)}`;
      }
    } else {
      const dateValue = value as Date | undefined;
      if (dateValue instanceof Date) {
        return dateValue.toLocaleDateString(locale);
      }
    }
    return <span className="text-muted-foreground">{placeholder}</span>;
  };

  if (withoutForm || !form?.control || !name) return null;

  return (
    <div className="space-y-1">
      {showLabel && (
        <Label htmlFor={name} className="text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <Controller
        name={name}
        control={form.control}
        rules={{ required: required ? message : false }}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'rounded-xs h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0 w-full justify-start bg-transparent text-white hover:bg-transparent hover:text-white',
                  !field.value && 'text-muted-foreground',
                  className
                )}
                disabled={disabled}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {renderLabel(field.value)}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode={range ? 'range' : 'single'}
                selected={field.value}
                onSelect={field.onChange}
                numberOfMonths={range ? 2 : 1}
                required
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {form.formState.errors[name] && (
        <p className="text-xs text-red-500">
          {(form.formState.errors[name] as FieldError)?.message}
        </p>
      )}
    </div>
  );
};

export { MyDatePicker };