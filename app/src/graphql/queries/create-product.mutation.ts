import { gql } from "@apollo/client"

export const CREATE_PRODUCT_MUTATION = gql`
    CreateProductMutation($input: CreateProductInput) {
        mutation createProduct(input: $input) {
            id
        }
    }
`;