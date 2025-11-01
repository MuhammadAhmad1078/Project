import { gql } from "@apollo/client";

const GET_PRODUCT_LISTING_OVERVIEW = gql`
  query GetProductListingOverview {
    getProductListingOverview {
      activeListing
      outOfStock
      totalListing
      productList {
        id
        name
        description
        price
        discount
        images {
          id
          url
        }
        category {
          id
          name
        }
        type {
          id
          name
        }
      }
    }
  }
`;

const GET_SELLER_INSIGHT = gql`
  query GetSellerProductEngagementInsights($dateRange: DateRangeInput) {
    getSellerProductEngagementInsights(dateRange: $dateRange) {
      answerChat
      totalLikes
      totalViews
    }
  }
`;

const GET_USER_SUMMARY = gql`
  query GetUserSalesSummary {
    getUserSalesSummary {
      monthlySale
      todaySale
      totalSale
    }
  }
`;

const GET_SALES_INSIGHT = gql`
  query GetSalesInsights($dateRange: SalesInsightRangeInput!) {
    getSalesInsights(dateRange: $dateRange) {
      date
      totalSales
    }
  }
`;

const GET_MY_LISTING_PRODUCT = gql`
  query GetListedProducts($offset: Int, $limit: Int, $sortBy: String) {
    getListedProducts(offset: $offset, limit: $limit, sortBy: $sortBy) {
      id
      name
      description
      price
      discount
      images {
        id
        url
      }
      category {
        id
        name
      }
      type {
        id
        name
      }
    }
  }
`;

const GET_MY_PRODUCT_REVIEW = gql`
  query GetMyProductReviewsOverview {
    getMyProductReviewsOverview {
      averageRating
      reviewCount
      products {
        id
        name
        images {
          id
          url
        }
        reviews {
          id
          images {
            id
            url
          }
          reviewer {
            userName
            id
          }
          rating
          comment
          createdAt
        }
      }
    }
  }
`;

const GET_PROFILE_ORDER_OVERVIEW = gql`
  query GetOrdersOverview($isSeller: Boolean!) {
    getOrdersOverview(isSeller: $isSeller) {
      inProgressOrdersCount
      completedOrdersCount
      cancelOrderCount
      totalCount
    }
  }
`;

const GET_PROFILE_ORDER = gql`
  query GetProfileOrders($isSeller: Boolean!, $offset: Int, $limit: Int) {
    getProfileOrders(isSeller: $isSeller, offset: $offset, limit: $limit) {
      totalCount
      orders {
        id
        trackingId
        product {
          images {
            id
            url
          }
          price
          name
        }
        status
        createdAt
      }
    }
  }
`;

const GET_PRODUCT_DETAIL_BY_ID = gql`
  query GetProductById($getProductById: ID!) {
    getProductById(id: $getProductById) {
      avgRating
      reviewCount
      product {
        id
        name
        description
        price
        discount
        images {
          id
          url
        }
        type {
          id
          name
        }
        category {
          id
          name
        }
        reviews {
          id
          images {
            id
            url
          }
          rating
          comment
          createdAt
        }
      }
    }
  }
`;

const GET_INSIGHT_GRAPH = gql`
  query GetEngagementGraphInsights($dateRange: DateRangeInput) {
    getEngagementGraphInsights(dateRange: $dateRange) {
      date
      likes
      views
      chats
    }
  }
`;

const GET_PROFILE_ORDERS_DETAILED = gql`
  query GetProfileOrdersDetailed(
    $nftId: ID!
    $isSeller: Boolean!
    $offset: Int
    $limit: Int
  ) {
    checkLikeNft(nftId: $nftId)
    getProfileOrders(isSeller: $isSeller, offset: $offset, limit: $limit) {
      cancelOrderCount
      completedOrdersCount
      inProgressOrdersCount
      totalCount
      orders {
        id
        buyerSignature
        orderNumber
        totalPrice
        status
        service {
          tokenId
          title
        }
        nft {
          metadata
        }
        orderProducts {
          id
          price
          createdAt
          quantity
          product {
            price
            quantity
            images {
              url
              id
            }
            sku
            name
            discount
            description
          }
        }
      }
    }
  }
`;

export {
  GET_PRODUCT_LISTING_OVERVIEW,
  GET_SELLER_INSIGHT,
  GET_USER_SUMMARY,
  GET_SALES_INSIGHT,
  GET_MY_LISTING_PRODUCT,
  GET_MY_PRODUCT_REVIEW,
  GET_PROFILE_ORDER_OVERVIEW,
  GET_PROFILE_ORDER,
  GET_PRODUCT_DETAIL_BY_ID,
  GET_INSIGHT_GRAPH,
  GET_PROFILE_ORDERS_DETAILED,
};
