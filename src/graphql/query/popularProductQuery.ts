import { gql } from "@apollo/client";

const GET_POPULAR_PRODUCTS = gql`
  query GetPopularProducts($limit: Int!) {
    getPopularProducts(limit: $limit) {
      category {
        name
        id
      }
      name
      tokenId
      sellCount
      salesCount
      description
      id
      isFeature
      isForSale
      images {
        url
        id
      }
      price
    }
  }
`;

export { GET_POPULAR_PRODUCTS };
