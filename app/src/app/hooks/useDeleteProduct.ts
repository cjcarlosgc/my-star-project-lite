import { DELETE_PRODUCT_MUTATION } from "@/graphql/queries/delete-product.mutation"
import { DeleteProductInputRoot } from "@/graphql/types/delete-product.input"
import { DeleteProductOutputRoot } from "@/graphql/types/delete-product.output"
import { useMutation } from "@apollo/client"

export const useDeleteProduct = () => {
    const [ mutate, { data, loading }  ] = useMutation<DeleteProductOutputRoot, DeleteProductInputRoot>(
        DELETE_PRODUCT_MUTATION
    );

    return {
        deleteProduct: (input: DeleteProductInputRoot) => {
            mutate({
                variables: input
            })
        },
        deletedProduct: data?.deleteProduct,
        loading
    }
}