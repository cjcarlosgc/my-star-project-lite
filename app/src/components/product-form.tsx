'use client'

import { ProductFormProps } from "@/types/product-form-props";
import { useForm } from "react-hook-form";

export const ProductForm = (props: ProductFormProps) => {
    const { register, handleSubmit } = useForm({
        defaultValues: props.initialValues,
        mode: 'onChange',
    });

    const handleProductFormSubmit = handleSubmit((data) => {
        if(props.handleProductFormSubmit) {
            props.handleProductFormSubmit(data)
        }
    });

    return (
        <form onSubmit={handleProductFormSubmit}>
            <div>
                <label htmlFor="description">Description: </label>
                <input { ...register("description", { required: true }) }/>
            </div>
            <div>
                <label htmlFor="unitPrice">Precio: </label>
                <input {...register('unitPrice', { required: true })} />
            </div>
            <div>
                <label htmlFor="unitPrice">Marca: </label>
                <input {...register('brand')} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}