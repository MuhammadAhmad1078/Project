import { create } from "zustand";
import { client } from "@/config/apolloClient";
import {
  USER_LOGIN,
  WALLET_LOGIN,
  LOGOUT as LOGOUT_MUTATION,
  REFRESH_TOKEN,
} from "@/graphql/mutation/login";

// Define User interface based on API response
interface User {
  id: string;
  userName?: string;
  email?: string;
  walletAddress?: string;
  tradeVolume?: number;
  lastLogin?: string;
  referralLink?: string;
  image?: string;
  banner?: string;
  isTwoStepVerification?: boolean;
  isNormal?: boolean;
  isServiceProvider?: boolean;
  isProductSeller?: boolean;
  isSuperAdmin?: boolean;
  isAdmin?: boolean;
  refreshToken?: string;
  description?: string;
  balance?: number;
  nftCount?: number;
  createdAt?: string;
  instagram?: string;
  x?: string;
  reddit?: string;
  akar?: string;
  twitch?: string;
  signature?: string;
  creatorEarning?: number;
  sign?: string;
  message?: string;
}

// Auth state interface
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithWallet: (walletAddress: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<boolean>;
  isAuthenticated: () => boolean;
}

// Helper function to load user data from localStorage on client-side
const loadUserFromStorage = (): { user: User | null; token: string | null } => {
  if (typeof window === "undefined") return { user: null, token: null };

  try {
    const authData = localStorage.getItem("auth-data");
    if (authData) {
      const { user, token } = JSON.parse(authData);
      return { user, token };
    }
  } catch (error) {
    console.error("Error loading auth data from storage:", error);
  }

  return { user: null, token: null };
};

// Helper function to save user data to localStorage
const saveUserToStorage = (user: User | null, token: string | null): void => {
  if (typeof window === "undefined") return;

  try {
    if (user && token) {
      localStorage.setItem("auth-data", JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem("auth-data");
    }
  } catch (error) {
    console.error("Error saving auth data to storage:", error);
  }
};

// Initialize with data from localStorage if available
const initialState = loadUserFromStorage();

// Create the auth store
export const useAuthStore = create<AuthState>()((set, get) => ({
  // Initialize from localStorage or default to null values
  user: initialState.user,
  token: initialState.token,
  isLoading: false,
  error: null,

  // Email login
  loginWithEmail: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await client.mutate({
        mutation: USER_LOGIN,
        variables: { email, password },
      });

      if (data?.userLogin) {
        const { token, user } = data.userLogin;
        // Update state
        set({ user, token, isLoading: false });
        // Save to localStorage
        saveUserToStorage(user, token);
        // Reset Apollo client to use new auth token
        client.resetStore();
      } else {
        set({
          isLoading: false,
          error: "Login failed. Please check your credentials.",
        });
      }
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during login",
      });
    }
  },

  // Wallet login
  loginWithWallet: async (walletAddress: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await client.mutate({
        mutation: WALLET_LOGIN,
        variables: { walletAddress },
      });

      if (data?.login) {
        const { token, user } = data.login;
        // Update state
        set({ user, token, isLoading: false });
        // Save to localStorage
        saveUserToStorage(user, token);
        // Reset Apollo client to use new auth token
        client.resetStore();
      } else {
        set({ isLoading: false, error: "Wallet login failed." });
      }
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during wallet login",
      });
    }
  },

  // Logout
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      // Call the logout mutation
      await client.mutate({ mutation: LOGOUT_MUTATION });

      // Update state
      set({ user: null, token: null, isLoading: false });
      // Clear localStorage
      saveUserToStorage(null, null);
      // Reset Apollo client
      client.resetStore();
    } catch (error) {
      console.error("Logout error:", error);
      // Even if the server logout fails, we still clear local state
      set({ user: null, token: null, isLoading: false });
      saveUserToStorage(null, null);
      client.resetStore();
    }
  },

  // Refresh authentication token
  refreshToken: async () => {
    const currentToken = get().token;
    if (!currentToken) return false;

    try {
      set({ isLoading: true, error: null });
      const { data } = await client.mutate({
        mutation: REFRESH_TOKEN,
        variables: { token: currentToken },
      });

      if (data?.refreshToken?.token) {
        // Update only the token
        set({ token: data.refreshToken.token, isLoading: false });
        // Save updated token with existing user
        saveUserToStorage(get().user, data.refreshToken.token);
        return true;
      }

      set({ isLoading: false });
      return false;
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Token refresh failed",
      });
      return false;
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const { token, user } = get();
    return !!token && !!user;
  },
}));
