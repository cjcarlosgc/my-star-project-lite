import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
  query getProductsQuery {
    products {
      id,
      description,
      unitPrice
    }
  }
`;