import { gql } from "@apollo/client";

export const GET_CUSTOMERS_BY_QUERY = gql`
    query GetCustomersByQuery($input: GetCustomersByInput!) {
        findCustomersBy(input: $input) {
            id
            name
            lastName
            dni
            sex
        }
    }
`