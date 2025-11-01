"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { CartDrop } from "./CartDrop";
import { WishlistNotification } from "./WishlistNotification";
import { ProfileDrop } from "./ProfileDrop";
import { Navbar2 } from "./Navbar2";
import { useAuthStore } from "@/store";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [namechange, setNameChange] = useState<boolean>(true);
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (pathname === "/") {
      setNameChange(false);
    } else {
      setNameChange(true);
    }
  }, [pathname]);

  return (
    <>
      {namechange ? (
        <Navbar2 />
      ) : (
        <div className="w-full fixed left-0 right-0 z-50 bg-[#18191D] mx-auto flex justify-center">
          <div className="w-[98%] h-[70px] md:px-8 px-4 my-4 rounded-2xl flex items-center justify-between bg-[#0C666A]">
            <div className="flex gap-6 items-center">
              <Link href={"/"}>
                <img
                  className="w-[55px] md:w-[55px] md:h-[48px] shrink-0"
                  src="/assets/images/logo.png"
                />
              </Link>
              <div className="lg:block hidden">
                <ul className="flex gap-8 items-center">
                  <li>
                    <Link
                      // className={`text-base font-normal  text-[#FCFCFD] ${
                      //     pathname === '/' ? 'text-[#E2BF4B]' : 'text-[#FCFCFD]'
                      // }`}
                      className="text-sm font-medium  text-[#FCFCFD]"
                      href={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  {/* <li>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem className='bg-transparent hover:bg-transparent focus:bg-transparent hoverno'>
                                                <NavigationMenuTrigger className='text-sm font-medium hover:bg-transparent focus:bg-transparent active:bg-transparent !bg-transparent !hover:bg-transparent !focus:bg-transparent !active:bg-transparent shadow-none !important p-0'>
                                                    Categories
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <NavigationMenuLink 
                                                        href='/s' 
                                                    >
                                                        Link
                                                    </NavigationMenuLink>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </li> */}
                  <li>
                    <Link
                      className="text-sm font-medium  text-[#FCFCFD]"
                      href={"/"}
                    >
                      Explore Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm font-medium  text-[#FCFCFD]"
                      href={"/browseproducts"}
                    >
                      Browse Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center gap-5">
                <button
                  className="bg-transparent lg:hidden cursor-pointer"
                  onClick={() => setVisible(true)}
                >
                  <img src="/assets/icons/menu.png" width={20} alt="" />
                </button>
                <CartDrop />
                <WishlistNotification />
                {/* Notification icon - rendered client-side only */}
                <div className="relative">
                  {/* Conditionally render the entire link structure based on authentication */}
                  {isAuthenticated() ? (
                    <Link href="/useraccount/notifications">
                      <div className="relative cursor-pointer">
                        <img
                          src="/assets/icons/noti.png"
                          className="w-6 h-6 rounded-full object-cover object-top"
                          alt="Notifications"
                        />
                      </div>
                    </Link>
                  ) : null}
                </div>
                {/* ProfileDrop handles both authenticated and non-authenticated states */}
                <ProfileDrop />
              </div>
            </div>
          </div>
          <MobileMenu visible={visible} onClose={() => setVisible(false)} />
        </div>
      )}
    </>
  );
};

export { Navbar };
