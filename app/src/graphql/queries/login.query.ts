import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
    query Login($input: LoginInput!) {
        login(input: $input) {
            userId
            userName
            firstName
            lastName
            role
            menuItems {
                description
                name
                redirectTo
            }
        }
    }
`;