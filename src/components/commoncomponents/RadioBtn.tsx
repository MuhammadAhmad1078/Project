import React from 'react'
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from '@/lib/utils';


interface Props {
    id: string;
    value: string;
    title: string;
    subtitle?: string;
    onChange?: (value: string) => void
    labelclass?: string;
}

const RadioBtn:React.FC <Props> = ({id,value,title,subtitle,onChange,labelclass}) => {

    const handleChange = () => {
        if (onChange) {
        onChange(value)
        }
    }

  return (
    <div className={`flex gap-3 ${subtitle ? 'items-start':'items-center'}`}>
        <RadioGroupItem
            value={value}
            id={id}
            onClick={handleChange}
            className="mt-1 border-white data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
        />
        <div className={cn("flex flex-col",labelclass)}>
            <Label htmlFor={id} className="text-white text-sm font-medium flex flex-col items-start gap-0">
                {title}
                {subtitle && <span className="text-gray-400 text-sm">{subtitle}</span>}
            </Label>
        </div>
    </div>
  )
}

export default RadioBtn