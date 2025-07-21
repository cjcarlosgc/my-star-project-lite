import { CREATE_PRODUCT_MUTATION } from "@/graphql/queries/create-product.mutation"
import { CreateProductInputRoot } from "@/graphql/types/create-product.input";
import { CreateProductOutputRoot } from "@/graphql/types/create-product.output";
import { useMutation } from "@apollo/client"

export const useCreateProduct = () => {
    const [ mutate, { data, loading } ] = useMutation<CreateProductOutputRoot, CreateProductInputRoot>(CREATE_PRODUCT_MUTATION);

    return {
        createProduct: (input: CreateProductInputRoot) => {
            mutate({
                variables: input
            });
        },
        createdProduct: data?.createProduct,
        loading
    }
}