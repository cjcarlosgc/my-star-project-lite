export type EditProductInputRoot = {
    input: EditProductInput;
};

export type EditProductInput = {
    id: string;
    description: string;
    unitPrice: number;
    brand: string;
};