import { gql } from "@apollo/client";

export const EDIT_PRODUCT_MUTATION = gql`
    mutation EditProductMutation($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            product {
                id
            }
            success
            message
        }
    }
`;
