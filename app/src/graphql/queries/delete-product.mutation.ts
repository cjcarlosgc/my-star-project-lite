import { gql } from "@apollo/client";

export const DELETE_PRODUCT_MUTATION = gql`
    mutation DeleteProductMutation($input: DeleteProductInput!) {
        deleteProduct(input: $input) {
            product {
                id
            }
        }
    }
`;