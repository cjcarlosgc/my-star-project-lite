'use client'

import { ProductFormProps } from "@/types/product-form-props";
import { useForm } from "react-hook-form";

export const ProductForm = (props: ProductFormProps) => {
    const { register, handleSubmit } = useForm({
        defaultValues: props.initialValues || { },
        mode: 'onChange',
    });

    const handleProductFormSubmit = handleSubmit((data) => {
        if(props.handleProductFormSubmit) {
            props.handleProductFormSubmit(data)
        }
    });

    const handleClickReturnButton = () => {
        props.handleClickReturnButton();
    }

    const buttonText = props.initialValues?.id ? "Editar" : "Crear";

    return (
        <form onSubmit={handleProductFormSubmit}>
            <div>
                <label htmlFor="description">Description: </label>
                <input { ...register("description", { required: true }) } readOnly={props.readonly} />
            </div>
            <div>
                <label htmlFor="unitPrice">Precio: </label>
                <input {...register('unitPrice', { required: true })} readOnly={props.readonly}/>
            </div>
            <div>
                <label htmlFor="unitPrice">Marca: </label>
                <input {...register('brand')} readOnly={props.readonly}/>
            </div>
            { !props.readonly && (<button type="submit">{buttonText}</button>)}
            <button onClick={handleClickReturnButton}>Regresar</button>
        </form>
    )
}