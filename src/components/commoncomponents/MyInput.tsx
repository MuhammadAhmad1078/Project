'use client'

import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type MyInputProps = (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  name?: string
  label?: string
  required?: boolean
  message?: string
  withoutForm?: boolean
  password?: boolean
  textArea?: boolean
  className?: string
}

export const MyInput: React.FC<MyInputProps> = ({
  name,
  label,
  required = false,
  message = 'This field is required',
  withoutForm = false,
  password = false,
  textArea = false,
  className,
  ...props
}) => {
  const form = useFormContext()
  const showLabel = !withoutForm && name && label && form?.control

  if (withoutForm || !form?.control || !name) {
    return textArea ? (
      <Textarea
        placeholder={props.placeholder || ''}
        className={cn('rounded-xs border-[#2E7A80] focus:ring-0 focus-visible:ring-0', className)}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        autoComplete='none'
      />
    ) : (
      <Input
        type={password ? 'password' : (props as React.InputHTMLAttributes<HTMLInputElement>).type || 'text'}
        placeholder={props.placeholder || ''}
        className={cn('rounded-xs h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0', className)}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        autoComplete='none'
      />
    )
  }

  return (
    <div className="space-y-1">
      {showLabel && (
        <Label htmlFor={name} className="text-sm font-medium pb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={form.control}
        rules={{ required: required ? message : false }}
        render={({ field }) =>
          textArea ? (
            <Textarea
              {...field}
              placeholder={props.placeholder || ''}
              className={cn('rounded-xs h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0', className)}
              disabled={props.disabled}
              autoComplete='none'
            />
          ) : (
            <Input
              {...field}
              type={password ? 'password' : 'text'}
              placeholder={props.placeholder || ''}
              className={cn('rounded-xs h-[44px] border-[#2E7A80] focus:ring-0 focus-visible:ring-0', className)}
              disabled={props.disabled}
              autoComplete='none'
            />
          )
        }
      />

      {form.formState.errors[name] && (
        <p className="text-xs text-red-500">{form.formState.errors[name]?.message?.toString()}</p>
      )}
    </div>
  )
}
