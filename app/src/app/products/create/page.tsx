"use client";

import { useProductFormStore } from "@/app/store/useProductFormStore";
import { ProductForm } from "@/components/product-form";
import { ProductFormData } from "@/types/product-form-data";

export default function CreateProduct() {
  const { currentProduct, setCurrentProduct } = useProductFormStore();

  const handleProductFormSubmit = (data: ProductFormData) => {
    console.log("Del form:", data);

    setCurrentProduct(data);

    console.log("Ahora el store es:", currentProduct);
  };

  return (
    <div>
      <h1>Create Product Page</h1>
      <p>Vamos a crear un producto</p>

      <br />
      <ProductForm handleProductFormSubmit={handleProductFormSubmit} />

      {currentProduct && (
        <>
          <span>felicidades, se creó</span>
          <b>{currentProduct.description}</b>
        </>
      )}
    </div>
  );
}
