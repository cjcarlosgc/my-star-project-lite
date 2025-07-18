import { ProductFormData } from "./product-form-data";

export type ProductFormProps = {
  initialValues: ProductFormData | null;
  readonly?: boolean;
  handleProductFormSubmit?: (data: ProductFormData) => void;
  handleClickReturnButton: () => void;
};
