import { gql } from "@apollo/client";

const CREATE_NFT = gql`
    mutation CreateNFT($input: CreateNonFungibleTokenInput) {
        createNFT(input: $input) {
            id
            tokenId
        }
    }
`

const PUT_NFT_ON_SALE = gql`
    mutation UpdateNFT($input: UpdateNonFungibleTokenInput) {
        updateNFT(input: $input) {
            id
        }
    } 
`

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`

const UPDATE_USER_PROFILE = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            id
            image
            banner
            userName
            description
            instagram
            x
            akar
            twitch
        }
    }
`

const CREATE_COLLECTION = gql`
    mutation CreateCollection($input: CreateCollectionInput) {
        createCollection(input: $input) {
            id
        }
    }
`

const LIKE_NFT = gql`
    mutation LikeNFT($nftId: ID!) {
        likeNFT(nftId: $nftId) {
            id
        }
    }
`

const UNLIKE_NFT =  gql`
    mutation UnlikeNFT($nftId: ID!) {
        unlikeNFT(nftId: $nftId)
    }
`

const VIEW_NFT =gql`
    mutation ViewNFT($nftId: ID!) {
        viewNFT(nftId: $nftId) {
            id  
        }
    }
`

const SET_SIGNATURE = gql`
  mutation SetSignature($signature: String!) {
    setSignature(signature: $signature) {
      id
    }
  }
`
const CREATE_OFFER = gql`
  mutation CreateOffer($input: CreateOfferInput!) {
    createOffer(input: $input) {
      id
    }
  }
`
const CREATE_PURPOSAL = gql`
  mutation CreateProposal($input: CreateProposalInput!) {
    createProposal(input: $input) {
      id
      proposedPrice
    }
  }
`
const UPDATE_OFFER = gql `
  mutation UpdateOffer($input: UpdateOfferInput) {
    updateOffer(input: $input) {
      status
    }
  }
`
const UPDATE_PROPOSAL = gql `
  mutation UpdateProposal($input: UpdateProposalInput!) {
    updateProposal(input: $input) {
      status
    }
  }
`
const UPDATE_BID = gql `
  mutation UpdateBid($input: UpdateBidInput!) {
    updateBid(input: $input) {
      isActive
    }
  }
`
const UPDATE_NFT_STATUS = gql `
  mutation UpdateNFT($input: UpdateNonFungibleTokenInput) {
    updateNFT(input: $input) {
        id
    }
  }
`

const CREATE_BID = gql`
  mutation CreateBid($input: CreateBidInput!) {
    createBid(input: $input) {
      id
      basePrice
    }
  }
`;

const PURCHASE_NFT = gql`
  mutation PurchaseNFT($input: purchaseNFTInput) {
  purchaseNFT(input: $input) {
    id
  }
}
`

export {
    CREATE_NFT,
    PUT_NFT_ON_SALE,
    UPDATE_USER,
    CREATE_COLLECTION,
    LIKE_NFT,
    UNLIKE_NFT,
    UPDATE_USER_PROFILE,
    VIEW_NFT,
    SET_SIGNATURE,
    CREATE_OFFER,
    UPDATE_OFFER,
    UPDATE_PROPOSAL,
    UPDATE_BID,
    UPDATE_NFT_STATUS, 
    CREATE_BID,
    CREATE_PURPOSAL,
    PURCHASE_NFT
}