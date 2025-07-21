export interface CreateCustomerInput {
    dni: string;
    name: string;
    lastName: string;
    sex: string;
}

export interface CreateCustomerInputRoot {
    input: CreateCustomerInput;
}