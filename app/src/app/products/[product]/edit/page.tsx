"use client";
import { useEditProduct } from "@/app/hooks/useEditProduct";
import { useProduct } from "@/app/hooks/useProduct";
import { ProductForm } from "@/components/product-form";
import { EditProductInputRoot } from "@/graphql/types/edit-product.input";
import { ProductFormData } from "@/types/product-form-data";
import {
  mapProductFormDataToEdit,
  mapProductToFormData,
} from "@/utils/mappers";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductEdit() {
  const params = useParams();
  const router = useRouter();
  const [isShowEditedMessage, setIsShowEditedMessage] = useState(false);
  const { product } = useProduct(params.product as string);
  const { editProduct, editedProduct } = useEditProduct();

  const initialValues: ProductFormData | null = mapProductToFormData(product);

  const handleProductFormSubmit = (data: ProductFormData) => {
    const productMapped: EditProductInputRoot = mapProductFormDataToEdit(data);

    editProduct(productMapped);
  };

  const handleClickReturn = () => {
    router.back();
  };

  useEffect(() => {
    if (editedProduct?.success) {
      setIsShowEditedMessage(true);

      const timeOut = setTimeout(() => {
        setIsShowEditedMessage(false);
      }, 5000);

      return () => clearTimeout(timeOut);
    }
  }, [editedProduct]);

  return (
    <>
      {isShowEditedMessage && <span>Se actualizó el producto</span>}
      {initialValues && (
        <ProductForm
          initialValues={initialValues}
          handleProductFormSubmit={handleProductFormSubmit}
          handleClickReturnButton={handleClickReturn}
        />
      )}
    </>
  );
}
