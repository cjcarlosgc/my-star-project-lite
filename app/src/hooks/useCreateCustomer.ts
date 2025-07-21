import { CREATE_CUSTOMER_MUTATION } from "@/graphql/queries/create-customer.mutation";
import { CreateCustomerOutputRoot } from "@/graphql/types/create-customer.output";
import { CreateCustomerInputRoot } from "@/graphql/types/edit-customer.input";
import { useMutation } from "@apollo/client"


export const useCreateCustomer = () => {
    const [ create, { data, loading } ] = useMutation<CreateCustomerOutputRoot, CreateCustomerInputRoot>(CREATE_CUSTOMER_MUTATION);

    return {
        createCustomer: (input: CreateCustomerInputRoot) => {
            create({
                variables: input
            });
        },
        customerId: data?.createCustomer.customerId,
        loading
    }
}