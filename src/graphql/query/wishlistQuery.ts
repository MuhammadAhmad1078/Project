import { gql } from "@apollo/client";

const GET_WISHLIST = gql`
  query GetWishlist {
    getWishlist {
      id
      product {
        id
        name
        price
        discount
        images {
          id
          url
        }
        quantity
        isForSale
      }
      createdAt
    }
  }
`;

export { GET_WISHLIST };

