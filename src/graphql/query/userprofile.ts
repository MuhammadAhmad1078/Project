import { gql } from "@apollo/client";

const GET_ALL_USER_NFTs = gql`
  query CreatedNFTs {
  getUserMarketNFTItems {
    createdNFTs {
      id
      image
      isForSale
      name
      owner {
          id
          userName
      }
      collection {
          name
      }
      price
    }
    purchasedNFTs {
      id
      image
      isForSale
      name
      owner {
          id
          userName
      }
      collection {
          name
      }
      price
    }
  }
}
`;
const GET_USER_CREATED_NFTS= gql `
  query CreatedNFTs {
    getUserMarketNFTItems {
      createdNFTs {
        id
        image
        isForSale
        name
        owner {
          id
          userName
        }
        collection {
          id
          name
        }
        price
      }
    }
  }
`
const GET_USER_PURCHASED_NFTS= gql`
  query CreatedNFTs {
    getUserMarketNFTItems {
      purchasedNFTs {
        id
        image
        isForSale
        name
        owner {
          id
          userName
        }
        collection {
          id
          name
        }
        price
      }
    }
  }
`
const GET_ONSALED_NFTS = gql`
  query AuctionedNFTs {
    getUserMarketNFTSoledItems {
      auctionedNFTs {
        id
        image
        isForSale
        name
        owner {
            id
            userName
        }
        collection {
            id
        name
        }
        price
      }
      fixedNFTs {
        id
        image
        isForSale
        name
        owner {
            id
            userName
        }
        collection {
            id
        name
        }
        price
      }
    }
  }
`;

const GET_COLLECTIONSs = gql`
  query GetCollections {
    getCollections {
      collection {
        image
        cover
        id
        name
        nfts {
          id
        }
      }
    }
  }
`;

const GET_USER_ACTIVITY = gql`
  query GetUserHistory {
    getUserHistory {
      id
      buyer {
        userName
      }
      nft {
        name
        image
      }
      price
      transactionDate
    }
  }
`

export {
  GET_ALL_USER_NFTs,
  GET_USER_CREATED_NFTS,
  GET_USER_PURCHASED_NFTS,
  GET_ONSALED_NFTS,
  GET_COLLECTIONSs,
  GET_USER_ACTIVITY,
}