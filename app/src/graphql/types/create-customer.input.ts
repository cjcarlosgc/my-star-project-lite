export interface EditCustomerInput {
    id: string;
    dni: string;
    name: string;
    lastName: string;
    sex: string;
}

export interface EditCustomeInputRoot {
    input: EditCustomerInput;
}