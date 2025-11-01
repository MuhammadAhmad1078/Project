import React, { useState, useEffect, FormEvent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuthStore } from "@/store";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ProfileDrop = () => {
  const {
    user,
    logout,
    loginWithEmail,
    loginWithWallet,
    isLoading,
    error,
    isAuthenticated,
  } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Form state
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [showWalletInput, setShowWalletInput] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  // Only run client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset form fields when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setWalletAddress("");
      setShowWalletInput(false);
      setLocalError(null);
    }
  }, [isOpen]);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (showWalletInput) {
      // Handle wallet login
      if (walletAddress.trim()) {
        await loginWithWallet(walletAddress.trim());
      }
    } else {
      // Handle email/password login
      await loginWithEmail(email, password);
    }

    // Close dropdown on successful login
    if (isAuthenticated()) {
      setIsOpen(false);
    }
  };

  // Toggle between wallet and email/password login
  const toggleLoginMethod = () => {
    setShowWalletInput((prev) => !prev);
    setLocalError(null); // Clear any previous errors
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        asChild
        className="border-0 bg-transparent hover:bg-transparent cursor-pointer"
      >
        <div className="relative">
          {/* Use UserAvatar component that works consistently on server and client */}
          <UserAvatar
            userName={mounted && isAuthenticated() ? user?.userName : "Guest"}
            userImage={mounted && isAuthenticated() ? user?.image : undefined}
            size="sm"
            className="border border-white"
          />
          {/* Only show the green indicator dot after client-side hydration */}
          {mounted && isAuthenticated() && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mt-5">
        {/* Use mounted state to ensure client-side rendering before checking auth */}
        {mounted && isAuthenticated() ? (
          // Logged in state
          <>
            <DropdownMenuLabel className="py-4 flex flex-col items-center">
              <div className="h-16 w-16 mb-2">
                <UserAvatar
                  userName={user?.userName}
                  userImage={user?.image}
                  size="lg"
                  className="border-2 border-[#25A7B0]"
                />
              </div>
              <h4 className="text-center text-base font-medium">
                {user?.userName || "Welcome"}
              </h4>
              {user?.email && (
                <p className="text-xs text-gray-500">{user.email}</p>
              )}
              {user?.walletAddress && (
                <p className="text-xs text-gray-500 truncate max-w-[200px]">
                  {user.walletAddress}
                </p>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-2">
              <Link href="/selleraccount">
                <DropdownMenuItem className="cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Account Info
                </DropdownMenuItem>
              </Link>
              <Link href="/useraccount/orders">
                <DropdownMenuItem className="cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                  Order History
                </DropdownMenuItem>
              </Link>
              <Link href="/useraccount/tracking">
                <DropdownMenuItem className="cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M9 17H7a5 5 0 0 1 0-10h11a3 3 0 0 1 0 6h-1" />
                    <polyline points="9 17 4 17 6 22" />
                  </svg>
                  Track Order
                </DropdownMenuItem>
              </Link>
              {!user?.isProductSeller && (
                <Link href="/selleraccount/register">
                  <DropdownMenuItem className="cursor-pointer">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect width="18" height="10" x="3" y="11" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" x2="16" y1="16" y2="16" />
                    </svg>
                    Become a Seller
                  </DropdownMenuItem>
                </Link>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Sign Out
              </DropdownMenuItem>
            </div>
          </>
        ) : (
          // Logged out state - show login form
          <>
            <DropdownMenuLabel className="py-4">
              <h4 className="text-center text-base font-medium">
                Sign in to your account
              </h4>
            </DropdownMenuLabel>
            <div className="flex flex-col w-full gap-3 px-4 pb-4">
              <form onSubmit={handleSubmit} className="w-full">
                {!showWalletInput ? (
                  <>
                    {/* Email/Password Login Form */}
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                      <Label htmlFor="email" className="text-[13px]">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password" className="text-[13px]">
                          Password
                        </Label>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-center text-[#466FF7]"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder=""
                          className="pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          <img
                            src="/assets/icons/eye-b.png"
                            width={16}
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Wallet Login Form */}
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                      <Label htmlFor="walletAddress" className="text-[13px]">
                        Wallet Address
                      </Label>
                      <Input
                        type="text"
                        id="walletAddress"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="Enter your wallet address"
                        required
                      />
                    </div>
                  </>
                )}

                {(error || localError) && (
                  <p className="text-xs text-red-500 mt-1 mb-2">
                    {error || localError}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#25A7B0] px-8 py-5 w-full rounded-sm text-[13px] flex items-center gap-3 text-white hover:bg-[#25A7B0]"
                >
                  {isLoading
                    ? "Logging in..."
                    : showWalletInput
                    ? "Login with Wallet"
                    : "Login"}
                  <img src="/assets/icons/ar-lft.png" width={16} alt="" />
                </Button>
              </form>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-[#E4E7E9]"></div>
                <span className="mx-4 text-[13px] text-[#777E90]">
                  {showWalletInput
                    ? "Or login with email"
                    : "Or login with wallet"}
                </span>
                <div className="flex-grow border-t border-[#E4E7E9]"></div>
              </div>
              <Button
                type="button"
                onClick={toggleLoginMethod}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 py-5"
                disabled={isLoading}
              >
                {showWalletInput ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Use Email & Password
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
                    </svg>
                    Use Wallet Address
                  </>
                )}
              </Button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-[#E4E7E9]"></div>
                <span className="mx-4 text-[13px] text-[#777E90]">
                  Don&apos;t have an account?
                </span>
                <div className="flex-grow border-t border-[#E4E7E9]"></div>
              </div>
              <div className="text-center">
                <Link
                  href="/register"
                  className="text-[13px] text-center text-[#466FF7] border-b border-[#466FF7] pb-1"
                >
                  Create account
                </Link>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ProfileDrop };
