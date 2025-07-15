'use client';

import { useProduct } from '@/app/hooks/useProduct';
import { useParams } from 'next/navigation';

export default function Product() {
  const params = useParams();
  const productId = params.product as string;

  const { product, loading, error } = useProduct(productId);

  return (
    <>
      <br></br>
      <h1>Product Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading product: {error.message}</p>}
      {product && (
        <div>
          <h2>{product.description}</h2>
          <p>Precio: ${product.unitPrice}</p>
          <p>Marca: {product.brand}</p>
        </div>
      )}
    </>
  );
}
