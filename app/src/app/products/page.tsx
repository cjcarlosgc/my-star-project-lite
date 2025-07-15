'use client';

import { ProductsTable } from "@/components/products-table";
import { useProducts } from "../hooks/useProducts";
import { useRouter } from "next/navigation";

export default function Products() {
  const { products, loading } = useProducts();
  const router = useRouter();

  const handleTableRowClick = (productId: string) => {
    router.push(`products/${productId}`);
  }

  const handleAddNewProductButtonClick = () => {
    router.push('products/create');
  }

  return (
    <div>
      <h1>Products Page</h1>
      <button onClick={handleAddNewProductButtonClick}>Add New Product</button>
      
      <ProductsTable
        products={products}
        loading={loading}
        handleRowClick={handleTableRowClick}
      />
    </div>
  );
}