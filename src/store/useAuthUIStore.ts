import { create } from "zustand";

interface AuthUIState {
  isProfileDropdownOpen: boolean;
  setProfileDropdownOpen: (isOpen: boolean) => void;
}

// Create the auth UI store for controlling UI elements related to authentication
export const useAuthUIStore = create<AuthUIState>()((set) => ({
  isProfileDropdownOpen: false,
  setProfileDropdownOpen: (isOpen) => set({ isProfileDropdownOpen: isOpen }),
}));
