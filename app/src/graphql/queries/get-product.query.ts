import { gql } from '@apollo/client';

export const GET_PRODUCT_QUERY = gql`
  query getProductQuery($id: String!){
    product(id: $id) {
      id
      description
      unitPrice
      brand
    }
  }
`;