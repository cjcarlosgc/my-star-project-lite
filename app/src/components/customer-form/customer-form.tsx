'use client';

import { CustomerFormProps } from "@/types/customer-form-props";
import { CustomerFormValues } from "@/types/customer-form-values";
import { useForm } from "react-hook-form"

export const CustomerForm = (props: CustomerFormProps) => {
    const { register, handleSubmit, formState } = useForm({
        defaultValues: props.initialValues || {},
        mode: 'onChange'
    });
        console.log(props.initialValues)

    const sendForm = handleSubmit((formValues: CustomerFormValues) => {
        console.log(formState.errors);
        // if(props.handleSubmitCustomerForm && formState.isValid) {
        if(props.handleSubmitCustomerForm) {
            props.handleSubmitCustomerForm(formValues);
        }
    })

    return(
        <form onSubmit={sendForm}>
            <section>
                <label htmlFor="dni">DNI</label>
                <input id="dni" {...register('dni', { required: true } )} readOnly={props.readOnly}/>
            </section>
            <section>
                <label htmlFor="name">Nombre</label>
                <input id="name" {...register('name', { required: true })} readOnly={props.readOnly}/>
            </section>
            <section>
                <label htmlFor="lastName">Apellido</label>
                <input id="lastName" {...register('lastName')} readOnly={props.readOnly}/>
            </section>
            <section>
                <label htmlFor="sex">Sexo</label>
                <input id="sex" {...register('sex', { required: true })} readOnly={props.readOnly}/>
            </section>
            <button type="submit">Registrar</button>

            <button type="button" onClick={() => props.handleClickReturnButton() }>Regresar</button>
        </form>
    )
}