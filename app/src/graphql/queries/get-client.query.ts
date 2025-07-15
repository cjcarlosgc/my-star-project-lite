import { gql } from '@apollo/client';

export const GET_PRODUCT_QUERY = gql`
  query getProductQuery {
    product {
      id,
      description,
      unitPrice
    }
  }
`;