import { gql } from "@apollo/client";

const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    getCategories {
      id
      image
      name
      products {
        id
        name
        description
      }
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
  query GetProducts(
    $order: String
    $offset: Int
    $limit: Int
    $search: String
  ) {
    getProducts(
      order: $order
      offset: $offset
      limit: $limit
      search: $search
    ) {
      products {
        id
        name
        price
        description
        images {
          id
          url
        }
      }
      reviewCount
      avgRating
    }
  }
`;

const GET_PRODUCTS_BY_ID = gql`
  query GetProductById($getProductById: ID!) {
    getProductById(id: $getProductById) {
      reviewCount
      avgRating
      product {
        id
        name
        price
        description
        images {
          id
          url
        }
        quantity
        category {
          id
          name
        }
        attributes {
          id
          value
          title
        }
      }
    }
  }
`;

const GET_PRODUCT_REVIEWS = gql`
  query GetProductReviews(
    $productId: ID!
    $sortByRating: String
    $offset: Int
    $limit: Int
  ) {
    getProductReviews(
      productId: $productId
      sortByRating: $sortByRating
      offset: $offset
      limit: $limit
    ) {
      reviews {
        id
        comment
        rating
        reviewer {
          id
          userName
        }
      }
      totalCount
    }
  }
`;

const GET_RELATED_PRODUCTS = gql`
  query GetRelatedProducts($id: ID!, $categoryId: ID!) {
    getRelatedProducts(id: $id, categoryId: $categoryId) {
      id
      name
      price
      images {
        url
      }
    }
  }
`;

const GET_CATEGORY_LOOPKUP = gql`
  query getCategories {
    getCategories {
      id
      name
      types {
        id
        name
        products {
          id
          name
        }
      }
    }
  }
`;

export {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCT_REVIEWS,
  GET_RELATED_PRODUCTS,
  GET_CATEGORY_LOOPKUP,
};
