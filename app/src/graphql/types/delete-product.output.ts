export type DeleteProductOutput = {
  success: boolean;
  message: string;
  product: {
    id: string;
  };
};

export type DeleteProductOutputRoot = {
  deleteProduct: DeleteProductOutput;
};
