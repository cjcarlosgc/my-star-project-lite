import { CustomerFormValues } from "./customer-form-values";

export interface CustomerFormProps {
    initialValues?: CustomerFormValues | null;
    readOnly?: boolean;
    handleSubmitCustomerForm?: (values: CustomerFormValues) => void;
    handleClickReturnButton: () => void;
}
