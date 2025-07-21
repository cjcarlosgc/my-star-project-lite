import { EDIT_PRODUCT_MUTATION } from "@/graphql/queries/edit-product.mutation"
import { EditProductInputRoot } from "@/graphql/types/edit-product.input";
import { EditProductOutputRoot } from "@/graphql/types/edit-product.output";
import { useMutation } from "@apollo/client"

export const useEditProduct = () => {
    const [ mutate, { data, loading } ] = useMutation<EditProductOutputRoot, EditProductInputRoot>(
        EDIT_PRODUCT_MUTATION
    );

    return {
        editProduct: (input: EditProductInputRoot) => {
            mutate({
                variables: input,
            })
        },
        editedProduct: data?.updateProduct || null,
        loading
    }
}
