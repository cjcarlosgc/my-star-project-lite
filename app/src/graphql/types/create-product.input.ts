export type CreateProductInputRoot = {
    input: CreateProductInput;
};

export type CreateProductInput = {
    description: string;
    unitPrice: number;
    brand: string;
};