"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CartDrop } from "./CartDrop";
import { WishlistNotification } from "./WishlistNotification";
import { Input } from "../ui/input";
import { useMediaQuery } from "usehooks-ts";
import { ProfileDrop } from "./ProfileDrop";
import { MenuDropdown } from "./MenuDropdown";
import { useAuthStore, useAuthUIStore } from "@/store";

const Navbar2 = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { setProfileDropdownOpen } = useAuthUIStore();

  useEffect(() => {
    if (isLargeScreen) {
      setOpen(false);
    }
  }, [isLargeScreen]);

  return (
    <>
      <div className="w-full fixed left-0 right-0 z-50 bg-[#081516] mx-auto flex justify-center">
        <div className="w-[98%] h-[70px] md:px-8 px-4 my-4 rounded-2xl flex items-center gap-10 bg-[#0C666A]">
          <div className="flex gap-6 items-center w-full">
            <div className="flex gap-3 items-center">
              <MenuDropdown />
              <Link href={"/"}>
                <img
                  className="w-[55px] md:w-[55px] md:h-[48px] shrink-0"
                  src="/assets/images/logo.png"
                />
              </Link>
            </div>
            <div className="lg:inline-flex hidden gap-5 md:w-[50%] w-full mx-auto">
              <div className="inline-flex items-center rounded-lg bg-[#23262F] overflow-hidden w-full py-1">
                <div className="relative w-full">
                  <Input
                    type="text"
                    id="search"
                    placeholder="Search Products"
                    className="border-0 pr-10 focus-visible:ring-0 w-full"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <img src="/assets/icons/search-w.png" width={20} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <div className="inline-flex items-center justify-center gap-3">
              <div className="lg:hidden block">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger className="p-0 bg-transparent pt-3">
                    <img src="/assets/icons/search-w.png" width={20} />
                  </PopoverTrigger>
                  <PopoverContent className="bg-[#18191D] w-full border-0 justify-center">
                    <div className="relative w-full">
                      <button
                        type="button"
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        <img
                          src="/assets/icons/search-w.png"
                          width={20}
                          alt=""
                        />
                      </button>
                      <Input
                        type="text"
                        id="search"
                        placeholder="Search Products"
                        className="border-0 pl-10 focus-visible:ring-0 w-full text-white"
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <CartDrop />
              <WishlistNotification />
              {/* Notification icon - rendered client-side only */}
              <div className="relative">
                {/* If authenticated, link to notifications, otherwise prompt login */}
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
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setProfileDropdownOpen(true)}
                  >
                    <img
                      src="/assets/icons/noti.png"
                      className="w-6 h-6 rounded-full object-cover object-top"
                      alt="Notifications"
                    />
                  </div>
                )}
              </div>
              <ProfileDrop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar2 };
