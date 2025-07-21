import { GET_CUSTOMER_QUERY } from "@/graphql/queries/get-customer.query";
import { GetCustomerInputRoot } from "@/graphql/types/get-customers.input";
import { GetCustomerOutputRoot } from "@/graphql/types/get-customers.output";
import { useQuery } from "@apollo/client";

export const useCustomer = (input: GetCustomerInputRoot) => {
    const { data, loading } = useQuery<GetCustomerOutputRoot, GetCustomerInputRoot>(
        GET_CUSTOMER_QUERY,
        {
            variables: input,
            fetchPolicy: 'cache-and-network'
        }
    );

    return {
        customerFinded: data?.customer,
        loading
    }
}