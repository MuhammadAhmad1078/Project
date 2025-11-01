import { gql } from "@apollo/client";

/**
 * Create a new user with wallet address
 */
export const CREATE_USER = gql`
  mutation CreateUser($walletAddress: String!) {
    createUser(walletAddress: $walletAddress) {
      id
      refreshToken
    }
  }
`;

/**
 * Login with email and password
 */
export const USER_LOGIN = gql`
  mutation UserLogin($email: String, $password: String) {
    userLogin(email: $email, password: $password) {
      token
      user {
        akar
        x
        walletAddress
        userName
        twitch
        tradeVolume
        signature
        sign
        services {
          id
          title
          description
          price
          tokenId
          imageUrl
          salesCount
          isFeature
          isForSale
        }
        balance
        banner
        creatorEarning
        createdAt
        description
        email
        id
        image
        instagram
        isAdmin
        isNormal
        isProductSeller
        isServiceProvider
        isSuperAdmin
        isTwoStepVerification
        lastLogin
        nftCount
        message
        reddit
        referralLink
        refreshToken
        role {
          id
          name
          isCollectionWeb3
          isAddWeb3Collection
          isViewWeb3Collection
          isAddNft
          isViewNft
          isCollectionDb
          isViewDbCollection
          isAddDbCollection
          isEditDbCollection
          isDeleteDbCollection
          isViewDbNft
          isAddDbNft
          isEditDbNft
          isDeleteDbNft
          isAddUser
          isEditUser
          isDeleteUser
          isAddRole
          isEditRole
          isDeleteRole
          createdAt
        }
        password
      }
    }
  }
`;

/**
 * Login with wallet address
 */
export const WALLET_LOGIN = gql`
  mutation Login($walletAddress: String!) {
    login(walletAddress: $walletAddress) {
      token
      user {
        akar
        x
        walletAddress
        userName
        twitch
        tradeVolume
        signature
        sign
        services {
          id
          title
          description
          price
          tokenId
          imageUrl
          salesCount
          isFeature
          isForSale
        }
        balance
        banner
        creatorEarning
        createdAt
        description
        email
        id
        image
        instagram
        isAdmin
        isNormal
        isProductSeller
        isServiceProvider
        isSuperAdmin
        isTwoStepVerification
        lastLogin
        nftCount
        message
        reddit
        referralLink
        refreshToken
        role {
          id
          name
          isCollectionWeb3
          isAddWeb3Collection
          isViewWeb3Collection
          isAddNft
          isViewNft
          isCollectionDb
          isViewDbCollection
          isAddDbCollection
          isEditDbCollection
          isDeleteDbCollection
          isViewDbNft
          isAddDbNft
          isEditDbNft
          isDeleteDbNft
          isAddUser
          isEditUser
          isDeleteUser
          isAddRole
          isEditRole
          isDeleteRole
          createdAt
        }
        password
      }
    }
  }
`;

/**
 * Refresh authentication token
 */
export const REFRESH_TOKEN = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      token
    }
  }
`;

/**
 * Logout the current user
 */
export const LOGOUT = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;
