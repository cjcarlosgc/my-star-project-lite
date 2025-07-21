"use client";

import { ProductForm } from "@/components/product-form";
import { ProductFormData } from "@/types/product-form-data";
import { useRouter } from "next/navigation";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import { CreateProductInputRoot } from "@/graphql/types/create-product.input";
import { mapProductFormDataToCreate } from "@/utils/mappers";
import { useEffect, useState } from "react";

export default function CreateProduct() {
  const router = useRouter();
  const { createProduct, createdProduct } = useCreateProduct();
  const [ showAlert, setShowAlert ] = useState(false);
  const [ productFormData, setProductFormData ] = useState<ProductFormData | null>(null);

  const handleProductFormSubmit = (data: ProductFormData) => {
    setProductFormData(data);

    const newProduct: CreateProductInputRoot = mapProductFormDataToCreate(data);
    
    createProduct(newProduct);
  };

  const handleClickReturn = () => {
    router.back();
  }

  useEffect(() => {
    if(createdProduct?.id){
      setShowAlert(true);
    }
  }, [createdProduct])

  return (
    <div>
      <h1>Create Product Page</h1>
      <p>Vamos a crear un producto</p>

      <br />
      <ProductForm
        handleClickReturnButton={handleClickReturn}
        handleProductFormSubmit={handleProductFormSubmit}
      />

      {showAlert && (
        <>
          <span>felicidades, se creó</span>
          <b>{productFormData?.description}</b>
        </>
      )}
    </div>
  );
}
