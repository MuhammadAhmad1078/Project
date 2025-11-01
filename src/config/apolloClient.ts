import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://backend-underground.souqna.net/graphql";

// HTTP Link
const httpLink = createHttpLink({
  uri: API_URL,
  credentials: "include",
});
// Auth Link (Attaches token)
const authLink = setContext((_, { headers }) => {
  // Get token from localStorage (this will be updated by our useAuthStore)
  const token =
    typeof window !== "undefined" ? localStorage.getItem("auth-token") : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.log("error:", err);
      if (
        err.message?.includes("Token is invalid or expired") ||
        err.message?.includes("Invalid token or authentication failed")
      ) {
        console.warn("Token expired or invalid, logging out...");
        // localStorage.clear();
        // window.location.href = "/";
        // logoutClient
        //   .mutate({ mutation: LOGOUT_MUTATION })
        //   .then(() => {
        //     localStorage.clear();
        //     window.location.href = "/";
        //   })
        //   .catch(() => {
        //    localStorage.clear();
        //     window.location.href = "/"
        //   })
        break;
      }
    }
  }
});

const link = from([errorLink, authLink, httpLink]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
