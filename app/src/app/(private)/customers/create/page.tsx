'use client';

import { CustomerForm } from "@/components/customer-form/customer-form";
import { useCreateCustomer } from "@/hooks/useCreateCustomer";
import { CustomerFormValues } from "@/types/customer-form-values";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Create() {
    const { createCustomer, customerId } = useCreateCustomer();
    const router = useRouter();

    const handleSubmit = (values: CustomerFormValues) => {
        createCustomer({
            input: {
                dni: values.dni,
                name: values.name,
                lastName: values.lastName,
                sex: values.sex
            }
        });
    }

    const handleReturn = () => {
        router.push('/customers')
    }

    return (
        <>
            {customerId && (<span>Se registró</span>)}
            <CustomerForm
                handleSubmitCustomerForm={handleSubmit}
                handleClickReturnButton={handleReturn}
            />
        </>
    )
}