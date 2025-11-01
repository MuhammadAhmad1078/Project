'use client'

import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

import { Button } from '../ui/button'
import { dropdownmenuData } from '../data'
import { useRouter } from 'next/navigation'

const MenuDropdown = () => {

    const [open, setOpen] = useState(false)
    const router = useRouter()
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild onClick={() => setOpen(true)}>
          <Button className='bg-transparent border-0 h-[43px] inline-flex gap-4 hover:bg-transparent cursor-pointer focus:ring-0 focus-visible:ring-0'>
            <img className="w-[25px] shrink-0" src='/assets/icons/menu.png' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-[#23262F] text-white border-0 w-[200px] ml-5'>
            <DropdownMenuLabel className='font-medium text-[15px] py-2 border-b border-[#3F4352] flex justify-between items-center'>
                Menu <span onClick={() => setOpen(false)} className='data-[state=closed]:animate-out cursor-pointer'><img src="/assets/icons/close-w.png" className='w-5' alt="" /></span>
            </DropdownMenuLabel>
            <DropdownMenuGroup className='py-1'>
                {
                    dropdownmenuData?.map((menu,index)=>
                    <React.Fragment key={index}>
                        {
                            menu?.sub ? 
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className='text-white text-[13px] font-normal py-2 hover:!bg-[#0C666A] hover:!text-white focus:!bg-[#0C666A] data-[state=open]:!bg-[#0C666A] data-[state=open]:!text-white'>
                                    <span className='font-medium'>{menu?.item}</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className='bg-[#23262F] text-white border-0 w-[200px]'>
                                        <DropdownMenuLabel className='font-medium text-[15px] py-2 border-b border-[#3F4352] mb-1'>
                                            {menu?.item}
                                        </DropdownMenuLabel>
                                        {
                                            menu?.sub?.map((submenu,index)=>
                                            <DropdownMenuSub  key={index}>
                                                <DropdownMenuSubTrigger className='text-white text-[13px] font-normal py-2 hover:!bg-[#0C666A] hover:!text-white focus:!bg-[#0C666A] data-[state=open]:!bg-[#0C666A] data-[state=open]:!text-white'>
                                                    <span className='font-medium'>{submenu?.subitem}</span>
                                                </DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                    <DropdownMenuSubContent className='bg-[#23262F] text-white border-0 w-[200px]'>
                                                        <DropdownMenuLabel className='font-medium text-[15px] py-2 border-b border-[#3F4352] mb-1'>
                                                            {submenu?.subitem}
                                                        </DropdownMenuLabel>
                                                        {
                                                            submenu?.innersub?.map((innersub,index)=>
                                                            <DropdownMenuItem
                                                                className='bg-transparent cursor-pointer text-[13px] font-normal py-2 text-white hover:!text-white hover:!bg-[#0C666A] focus:!bg-[#0C666A]' onClick={()=>router.push(innersub?.path)} key={index}>
                                                                {innersub?.innersubitem}
                                                            </DropdownMenuItem>
                                                            )
                                                        }
                                                    </DropdownMenuSubContent>
                                                </DropdownMenuPortal>  
                                            </DropdownMenuSub>
                                            )
                                        }
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>                                       
                            </DropdownMenuSub>
                            :
                            <DropdownMenuItem
                                className='bg-transparent cursor-pointer text-[13px] font-normal py-2 text-white hover:!text-white hover:!bg-[#0C666A] focus:!bg-[#0C666A]' onClick={()=>router.push(menu?.path)}>
                                {menu?.item}
                            </DropdownMenuItem>
                        }
                    </React.Fragment>
                    )
                }
            </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { MenuDropdown }
