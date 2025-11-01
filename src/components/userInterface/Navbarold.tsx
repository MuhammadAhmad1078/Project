'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import { MobileMenu } from './MobileMenu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { CartDrop } from './CartDrop'
import { WishlistNotification } from './WishlistNotification'
import { Input } from '../ui/input'
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from 'usehooks-ts'
import { SubMenuNavbar2 } from './SubMenuNavbar2'
import { ProfileDrop } from './ProfileDrop'


const Navbar2 = () => {

    // const [visible, setVisible] = useState<boolean>(false);
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (isLargeScreen) {
        setOpen(false)
        }
    }, [isLargeScreen])

    return (
        <>
            <div className='w-full fixed left-0 right-0 z-50 bg-[#18191D] mx-auto flex justify-center'>
                <div className='w-[98%] h-[70px] md:px-8 px-4 my-4 rounded-2xl flex items-center gap-10 bg-[#0C666A]'>
                    <div className='flex gap-6 items-center w-full'>
                        <Link href={'/'}>
                            <img className="w-[55px] md:w-[55px] md:h-[48px] shrink-0" src='/assets/images/logo.png' />
                        </Link>
                        <div className='lg:inline-flex hidden gap-5 w-full'>
                            <div className='inline-flex items-center gap-2 shrink-0'>
                                <img src="/assets/icons/loc.png" width={20} alt="" />
                                <p className='m-0 text-white text-[13px]'>
                                    Select Address
                                </p>
                            </div>
                            <div className='inline-flex items-center rounded-lg bg-[#23262F] overflow-hidden w-full'>
                                <Select>
                                    <SelectTrigger className="w-[80px] border-0 bg-transparent focus:ring-0">
                                        <SelectValue placeholder="All" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="category1">Category 1</SelectItem>
                                        <SelectItem value="category2">Category 2</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Separator orientation="vertical" className="h-6" />
                                <div className="relative w-full">
                                    <button
                                    type="button"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        <img src="/assets/icons/search-w.png" width={20} alt="" />
                                    </button>
                                    <Input
                                        type='text'
                                        id="search"
                                        placeholder="Search Products"
                                        className="border-0 pl-10 focus-visible:ring-0 w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shrink-0'>
                        <div className='inline-flex items-center justify-center gap-5'>
                            <div className="lg:hidden block">
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger className="p-0 bg-transparent pt-3">
                                        <img src="/assets/icons/search-w.png" width={20} />
                                    </PopoverTrigger>
                                    <PopoverContent className="bg-[#18191D] w-full border-0 justify-center">
                                    <div className="w-full">
                                        <div className="inline-flex items-center gap-2 shrink-0 mb-5">
                                            <img src="/assets/icons/loc.png" width={20} alt="" />
                                            <p className="m-0 text-white text-[13px]">Select Address</p>
                                        </div>
                                        <div className="inline-flex items-center rounded-lg bg-[#23262F] overflow-hidden w-full">
                                            <Select>
                                                <SelectTrigger className="text-white border-0 bg-transparent focus:ring-0">
                                                    <SelectValue placeholder="All" />
                                                </SelectTrigger>
                                                <SelectContent className="text-xs">
                                                    <SelectItem value="all">All</SelectItem>
                                                    <SelectItem value="category1">Category 1</SelectItem>
                                                    <SelectItem value="category2">Category 2</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Separator orientation="vertical" className="h-6" />
                                            <div className="relative w-full">
                                                <button
                                                    type="button"
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                                >
                                                    <img src="/assets/icons/search-w.png" width={20} alt="" />
                                                </button>
                                                <Input
                                                    type="text"
                                                    id="search"
                                                    placeholder="Search Products"
                                                    className="border-0 pl-10 focus-visible:ring-0 w-full text-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <CartDrop />
                            <WishlistNotification />
                                <img src="/assets/icons/noti.png" className='w-6 h-6 rounded-full object-cover object-top' alt="" />
                            <ProfileDrop />
                        </div>
                    </div>
                </div>
            </div>
            <SubMenuNavbar2 />           
            {/* <MobileMenu visible={visible} setVisible={setVisible} /> */}
        </>
    )
}

export {Navbar2}