import { ProductFormData } from "./product-form-data";

export type ProductFormStore = {
    currentProduct: ProductFormData | null;
    setCurrentProduct: (product: ProductFormData | null) => void;
}