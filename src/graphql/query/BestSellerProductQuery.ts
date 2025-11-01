import { gql } from "@apollo/client";

const GET_BEST_SELLER_PRODUCTS = gql`
  query GetBestSellerProducts($limit: Int!) {
    getBestSellerProducts(limit: $limit) {
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

export { GET_BEST_SELLER_PRODUCTS };
