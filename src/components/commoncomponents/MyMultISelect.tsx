"use client"

import React from "react"
import { Controller, Control } from "react-hook-form"
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface Option {
    id: number | string;
    name: string;
}

interface MyMultiSelectProps {
    name: string
    label?: string
    placeholder?: string
    options: Option[]
    control: Control<any>
    defaultValue?: string[]
    disabled?: boolean
    className?: string
    onChange?: (value: string) => void;
}

export const MyMultiSelect: React.FC<MyMultiSelectProps> = ({
  name,
  label,
  placeholder = "Select options...",
  options,
  control,
  defaultValue = [],
  disabled = false,
  className,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <Label className="text-sm font-medium pb-1">{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <MultiSelect
            values={field.value || []}
            onValuesChange={field.onChange}
          >
            <MultiSelectTrigger className={cn("rounded-xs min-h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0 w-full hover:!bg-transparent", className)}>
              <MultiSelectValue className="multiple-select-pill" placeholder={placeholder} />
            </MultiSelectTrigger>
            <MultiSelectContent className="hover:!bg-transparent">
              <MultiSelectGroup>
                {options.map((option) => (
                  <MultiSelectItem key={option.id} value={option.id.toString()}>
                    {option.name}
                  </MultiSelectItem>
                ))}
              </MultiSelectGroup>
            </MultiSelectContent>
          </MultiSelect>
        )}
      />
    </div>
  )
}
