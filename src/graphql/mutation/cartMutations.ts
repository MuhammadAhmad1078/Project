import { gql } from "@apollo/client";

const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      productId
      quantity
    }
  }
`;

const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($cartItemId: ID!, $quantity: Int!) {
    updateCartItem(cartItemId: $cartItemId, quantity: $quantity) {
      id
      quantity
    }
  }
`;

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($cartItemId: ID!) {
    removeFromCart(cartItemId: $cartItemId) {
      id
    }
  }
`;

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
      message
    }
  }
`;

export { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART, CLEAR_CART };

