import { useEffect } from "react";
import { useAuthStore } from "./useAuthStore";
import { client } from "@/config/apolloClient";

/**
 * This hook updates the Apollo client's authorization header
 * whenever the auth token changes in the Zustand store.
 *
 * Usage:
 * 1. Import this hook in your _app.tsx
 * 2. Call it inside a component in your app's root
 *
 * Example:
 * ```tsx
 * function MyApp({ Component, pageProps }) {
 *   useAuthHeader();
 *   return <Component {...pageProps} />;
 * }
 * ```
 */
export function useAuthHeader() {
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      // Set the auth token in localStorage for Apollo to use
      localStorage.setItem("auth-token", token);
    } else {
      localStorage.removeItem("auth-token");
    }

    // Reset the Apollo client store to apply new auth settings
    if (client) {
      client.resetStore().catch((err) => {
        console.error("Error resetting Apollo client store:", err);
      });
    }
  }, [token]);

  return null;
}
