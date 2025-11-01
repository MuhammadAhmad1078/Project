import { gql } from "@apollo/client";

const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($getProductByIdId: ID!) {
    getProductById(id: $getProductByIdId) {
      product {
        type {
          id
          name
        }
        seller {
          id
          userName
          image
          gender
          email
          description
          country
          banner
          balance
          x
          creatorEarning
          createdAt
        }
        reviews {
          id
          rating
          comment
          images {
            url
            id
          }
        }
        salesCount
        sellCount
        quantity
        price
        offers {
          id
          createdAt
          price
          offerAt
          sellerSignature
          status
        }
        id
        images {
          url
          id
        }
        discount
        description
        category {
          name
          image
          id
        }
        isFeature
        isForSale
        name
        sku
        sellerSignature
        tokenId
      }
      reviewCount
      avgRating
    }
  }
`;

export { GET_PRODUCT_DETAIL };
