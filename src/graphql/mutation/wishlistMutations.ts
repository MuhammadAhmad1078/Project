import { gql } from "@apollo/client";

const ADD_TO_WISHLIST = gql`
  mutation AddToWishlist($productId: ID!) {
    addToWishlist(productId: $productId) {
      id
      productId
    }
  }
`;

const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($wishlistItemId: ID!) {
    removeFromWishlist(wishlistItemId: $wishlistItemId) {
      id
    }
  }
`;

export { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST };

