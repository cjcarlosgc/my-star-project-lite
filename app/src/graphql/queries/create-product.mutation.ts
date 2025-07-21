import { gql } from "@apollo/client"

export const CREATE_PRODUCT_MUTATION = gql`
    mutation CreateProductMutation($input: CreateProductInput!) {
        createProduct(input: $input) {
            productId
        }
    }
`;