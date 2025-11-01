import { gql } from "@apollo/client";


const GET_BUYER_INSIGHT = gql`
  query GetBuyerProductEngagementInsights {
    getBuyerProductEngagementInsights {
      totalLikes
      totalReviews
      answerChat
    }
  }
`

const GET_BUYER_ORDER = gql `
  query GetBuyerOrders {
    getBuyerOrders {
      totalCount
      completedOrdersCount
      cancelOrderCount
    }
  }
`

export {
  GET_BUYER_INSIGHT,
  GET_BUYER_ORDER
}