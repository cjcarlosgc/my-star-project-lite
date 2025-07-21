import { GET_CUSTOMERS_BY_QUERY } from "@/graphql/queries/get-customers-by.query";
import { GetCustomersByInputRoot } from "@/graphql/types/get-customers-by.input";
import { GetCustomersByOutputRoot } from "@/graphql/types/get-customers-by.output";
import { useLazyQuery } from "@apollo/client";

export const useCustomersBy = () => {
    const [query, { data, loading } ] = useLazyQuery<GetCustomersByOutputRoot, GetCustomersByInputRoot>(GET_CUSTOMERS_BY_QUERY);

    return {
        getCustomersBy: (input: GetCustomersByInputRoot) => {
            query({
                variables: input,
            })
        },
        customers: data?.findCustomersBy || [],
        loading
    }
}