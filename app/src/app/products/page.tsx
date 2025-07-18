'use client';

import { ProductsTable } from "@/components/products-table";
import { useProducts } from "../hooks/useProducts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ConfirmModal } from "@/components/confirm-modal/confirm-modal";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { mapProductFormDataToDelete } from "@/utils/mappers";
import { DeleteProductInputRoot } from "@/graphql/types/delete-product.input";

export default function Products() {
  const { products, loading, refetch } = useProducts();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [ productId, setProductId ] = useState('');
  const { deleteProduct, deletedProduct } = useDeleteProduct();

  const handleSeeProductClick = (productId: string) => {
    router.push(`products/${productId}`);
  }

  const handleEditProductClick = (productId: string) => {
    router.push(`products/${productId}/edit`);
  }

  const handleDeleteProductClick = (productId: string) => {
    setProductId(productId);
    setModalOpen(true);
  }

  const handleConfirmDeleteProduct = () => {
    const productToDelete: DeleteProductInputRoot = mapProductFormDataToDelete(productId);

    deleteProduct(productToDelete);
  }

  const handeCancelDeleteProduct = () => {
    setProductId('');
    setModalOpen(false);
  }

  const handleAddNewProductButtonClick = () => {
    router.push('products/create');
  }

  useEffect(() => {
    refetch();
  }, [refetch])

  return (
    <>
      <h1>Products Page</h1>
      <button onClick={handleAddNewProductButtonClick}>Add New Product</button>
      
      <ProductsTable
        products={products}
        loading={loading}
        handleSeeProductClick={handleSeeProductClick}
        handleEditProductClick={handleEditProductClick}
        handleDeleteProductClick={handleDeleteProductClick}
      />

      { 
        modalOpen && (
          <ConfirmModal
            title=""
            description={`¿Estás seguro de que deseas eliminar este producto ${productId}?`}
            handleClickConfirm={handleConfirmDeleteProduct}
            handleClickCancel={handeCancelDeleteProduct}
            handleClickClose={handeCancelDeleteProduct}
          />
        )
      }
    </>
  );
}