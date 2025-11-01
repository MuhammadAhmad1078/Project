import { gql } from "@apollo/client";

const GET_ALL_SERVICES = gql`
  query GetServices($limit: Int, $offset: Int, $search: String) {
    getServices(limit: $limit, offset: $offset, search: $search) {
      id
      title
      description
      price
      tokenId
      imageUrl
      salesCount
      isFeature
      isForSale
      seller {
        id
        userName
        image
      }
    }
  }
`;

const GET_POPULAR_SERVICES = gql`
  query GetPopularServices($limit: Int!) {
    getPopularServices(limit: $limit) {
      id
      title
      description
      price
      tokenId
      imageUrl
      salesCount
      isFeature
      isForSale
      seller {
        id
        userName
        image
      }
    }
  }
`;

export { GET_ALL_SERVICES, GET_POPULAR_SERVICES };

