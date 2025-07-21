'use client';

import { useProduct } from '@/hooks/useProduct';
import { ProductForm } from '@/components/product-form';
import { mapProductToFormData } from '@/utils/mappers';
import { useParams, useRouter } from 'next/navigation';

export default function Product() {
  const params = useParams();
  const router = useRouter();
  
  const productId = params.product as string;

  const { product, loading, error } = useProduct(productId);
  const initialValues = mapProductToFormData(product);

  const handleClickReturn = () => {
        router.back();
  }

  return (
    <>
      <br></br>
      <h1>Product Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading product: {error.message}</p>}
      {product && (
          <ProductForm
            initialValues={initialValues}
            readonly={true}
            handleClickReturnButton={handleClickReturn}
          />
      )}
    </>
  );
}


