'use client'

import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { accessoriesRadio, capacityCheck, colorfamilyCheck, popularbrandCheck, priceRadio } from '@/components/data'
import { Separator } from '@/components/ui/separator'
import { Slider } from "@/components/ui/slider"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const ShopFilter = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [range, setRange] = useState<[number, number]>([10, 90])
  const [selectedPrice, setSelectedPrice] = useState<string>(priceRadio[0])

  const handleChange = (brand: string, checked: boolean) => {
    setSelectedBrands(prev =>
      checked ? [...prev, brand] : prev.filter(b => b !== brand)
    )
    console.log('value',brand)
  }

  return (
    <div>
      <h2 className='text-white text-base font-medium mb-4'>Popular Brands</h2>
      <div className='grid grid-cols-2 gap-5'>
        {popularbrandCheck.map((brand, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={(checked) => handleChange(brand, !!checked)}
              className="h-4 w-4 rounded border-1 border-white data-[state=checked]:bg-[#0C666A] data-[state=checked]:border-[#0C666A]"
            />
            <label
              htmlFor={brand}
              className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {brand}
            </label>
          </div>
        ))}
      </div>
      <Separator className='bg-[#777E90] my-7' />
      <div>
        <h2 className='text-white text-base font-medium mb-4'>Price Range</h2>
        <div className="text-white">
          <Slider
            defaultValue={range}
            value={range}
            onValueChange={(val) => setRange([val[0], val[1]])}
            min={0}
            max={100}
            step={1}
            className="
              w-full
              trackrange
            [&_[role=slider]]:bg-[#0C666A]
            [&_[role=slider]]:border-[#0C666A]
            "
          />
          <div className="flex justify-between gap-4 mt-4">
            <Input
              type="number"
              value={range[0]}
              onChange={(e) => setRange([+e.target.value, range[1]])}
              className="bg-transparent border-[#777E90] rounded px-3 py-2 w-full text-white placeholder:text-[#777E90]"
              placeholder="Min price"
            />
            <Input
              type="number"
              value={range[1]}
              onChange={(e) => setRange([range[0], +e.target.value])}
              className="bg-transparent border-[#777E90] rounded px-3 py-2 w-full text-white placeholder:text-[#777E90]"
              placeholder="Max price"
            />
          </div>
        </div>
        <div className='mt-5 space-y-3'>
          <RadioGroup 
            value={selectedPrice} 
            onValueChange={setSelectedPrice}
          >
            {priceRadio.map((price, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <RadioGroupItem 
                  value={price} 
                  id={`price-${index}`}
                  className="text-[#0C666A] border-white data-[state=checked]:bg-[#0C666A]"
                />
                <Label 
                  htmlFor={`price-${index}`}
                  className="text-sm text-white font-medium cursor-pointer"
                >
                  {price}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <Separator className='bg-[#777E90] my-7' />
      <div className='mt-5'>
        <h2 className='text-white text-base font-medium mb-4'>Color Family</h2>
        <div className='grid grid-cols-1 gap-3'>
          {colorfamilyCheck.map((color, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Checkbox
                id={color}
                checked={selectedBrands.includes(color)}
                onCheckedChange={(checked) => handleChange(color, !!checked)}
                className="h-4 w-4 rounded border-1 border-white data-[state=checked]:bg-[#0C666A] data-[state=checked]:border-[#0C666A]"
              />
              <label
                htmlFor={color}
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {color} 
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-5'>
        <h2 className='text-white text-base font-medium mb-4'>Storage Capacity</h2>
        <div className='grid grid-cols-1 gap-3'>
          {capacityCheck.map((capacity, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <Checkbox
                id={capacity}
                checked={selectedBrands.includes(capacity)}
                onCheckedChange={(checked) => handleChange(capacity, !!checked)}
                className="h-4 w-4 rounded border-1 border-white data-[state=checked]:bg-[#0C666A] data-[state=checked]:border-[#0C666A]"
              />
              <label
                htmlFor={capacity}
                className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {capacity} 
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-5 space-y-2'>
        <h2 className='text-white text-base font-medium mb-4'>Accessories</h2>
        <RadioGroup 
          value={selectedPrice} 
          onValueChange={setSelectedPrice}
        >
          {accessoriesRadio.map((price, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem 
                value={price} 
                id={`price-${index}`}
                className="text-[#0C666A] border-white data-[state=checked]:bg-[#0C666A]"
              />
              <Label 
                htmlFor={`price-${index}`}
                className="text-sm text-white font-medium cursor-pointer"
              >
                {price}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

export { ShopFilter }