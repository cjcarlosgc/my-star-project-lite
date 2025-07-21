export interface GetCustomersByInputRoot {
    input: GetCustomersByInput
}

export interface GetCustomersByInput {
    searchType: 'BY_NAME' | 'BY_DNI' | 'BY_SEX',
    pattern: string;
}