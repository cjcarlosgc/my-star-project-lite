import { ProductFormData } from "./product-form-data";

export type ProductFormProps = {
  initialValues?: ProductFormData;
  readonly?: boolean;
  handleProductFormSubmit?: (data: ProductFormData) => void;
};
