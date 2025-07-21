import { gql } from '@apollo/client';

export const GET_CUSTOMER_QUERY = gql`
  query getCustomerQuery($input: GetCustomerInput!) {
    customer(input: $input) {
      id
      name
      lastName
      dni
      sex
    }
  }
`;