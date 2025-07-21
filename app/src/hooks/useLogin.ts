import { LOGIN_QUERY } from "@/graphql/queries/login.query";
import { LoginInputRoot } from "@/graphql/types/login.input";
import { LoginOutputRoot } from "@/graphql/types/login.output";
import { useLazyQuery } from "@apollo/client"

export const useLogin = () => {
    const [ query, { data, loading } ] = useLazyQuery<LoginOutputRoot, LoginInputRoot>(LOGIN_QUERY);

    return {
        login: (input: LoginInputRoot) => {
            query({
                variables: input
            })
        },
        loginUser: data,
        loading
    }
}