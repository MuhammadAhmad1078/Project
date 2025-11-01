'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from '../ui/button'
import { menuItems } from '../data'
import { useLazyQuery } from '@apollo/client'
import { GET_CATEGORY_LOOPKUP } from '@/graphql'
import { Category } from '@/types/categoryType'


const SubMenuNavbar2 = () => {
    const [ loadData, {data} ] = useLazyQuery(GET_CATEGORY_LOOPKUP, { fetchPolicy: "cache-and-network"})

    useEffect(()=>{
        loadData()
    }, [loadData])

    return (
        <>
            <div className='w-full py-3 bg-[#18191D] border-b border-white'>
                <div className='md:w-[90%] w-[95%] mx-auto mt-32'>
                    <div className='inline-flex items-center gap-10 lg:justify-start justify-between w-full'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className='bg-[#23262F] border-0 h-[43px] inline-flex gap-4 hover:bg-[#23262F]'>
                                    All Categories <img src="/assets/icons/chev-w.png" width={20} alt="" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                {data?.getCategories?.map((category: Category, index: number) => {
                                    if (category.types) {
                                    return (
                                        <DropdownMenuSub key={index}>
                                            <DropdownMenuSubTrigger>
                                                <span className='font-medium'>{category.name}</span>
                                            </DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                <div className='grid md:grid-cols-2 grid-cols-1'>
                                                    {category.types.map((items, subIndex) => {
                                                    return (
                                                    <div key={subIndex} className='mb-3'>
                                                        <DropdownMenuLabel className='font-bold mb-1'>{items.name}</DropdownMenuLabel>
                                                        {items.products?.map((item, itemIndex) => (
                                                            <DropdownMenuItem key={itemIndex} asChild>
                                                                <Link href={item.name}>
                                                                    <span className='text-[13px]'>{item.name}</span>
                                                                </Link>
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </div>
                                                    )})}
                                                </div>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        );
                                    } else {
                                    return (
                                        <DropdownMenuItem key={index} asChild>
                                            <Link href={category.name}>{category.name}</Link>
                                        </DropdownMenuItem>
                                    );
                                    }
                                })}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <ul className='lg:flex gap-8 items-center hidden'>
                            {
                                menuItems?.map((items,i)=>
                                    <li key={i}>
                                        <Link 
                                            className='text-sm font-medium  text-[#FCFCFD]'
                                                href={items?.path}>
                                            {items?.title}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        <div className='lg:hidden block'>
                            <Menubar className="bg-transparent border-none shadow-none">
                                <MenubarMenu>
                                    <MenubarTrigger className="p-0 m-0 border-none bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                        <img src="/assets/icons/hammenu.png" width={40} alt="menu icon" />
                                    </MenubarTrigger>
                                    <MenubarContent className="bg-[#18191D] shadow-none">
                                    {menuItems?.map((item, i) => (
                                        <MenubarItem key={i} className="hover:bg-[#2a2b2f] focus:bg-[#2a2b2f]">
                                            <Link
                                                href={item?.path}
                                                className="text-sm font-medium text-[#FCFCFD] w-full block"
                                            >
                                                {item?.title}
                                            </Link>
                                        </MenubarItem>
                                    ))}
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </div>
                    </div>
                 </div>
            </div>            
        </>
    )
}

export {SubMenuNavbar2}