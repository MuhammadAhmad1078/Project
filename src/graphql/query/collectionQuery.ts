import { gql } from "@apollo/client"

const GET_NFTS_BY_COLLECTION_ID = gql`
  query GetCollectionNFTs($getCollectionNfTsId: ID!) {
  getCollectionNFTs(id: $getCollectionNfTsId) {
    id
    image
    isForSale
    name
    owner {
      id
      userName
    }
    price
    isAuctioned
  }
}
`

export {
    GET_NFTS_BY_COLLECTION_ID
}