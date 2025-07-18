export type EditProductOutput = {
    success: boolean;
    message: string;
    product: {
        id: string;
    };
}

export type EditProductOutputRoot = {
    updateProduct: EditProductOutput
};
