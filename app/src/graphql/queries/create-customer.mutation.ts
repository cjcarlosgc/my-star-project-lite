import { gql } from "@apollo/client";

export const CREATE_CUSTOMER_MUTATION = gql`
    mutation CreateCustomerMutation($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
            customerId
        }
    }
`;