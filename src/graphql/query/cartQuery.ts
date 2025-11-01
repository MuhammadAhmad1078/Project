import { gql } from "@apollo/client";

const GET_CART = gql`
  query GetCart {
    getCart {
      id
      productId
      product {
        id
        name
        price
        images {
          id
          url
        }
        quantity
        discount
      }
      quantity
      createdAt
    }
  }
`;

export { GET_CART };

