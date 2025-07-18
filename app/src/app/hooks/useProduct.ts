import { useQuery } from '@apollo/client';
import { GET_PRODUCT_QUERY } from '@/graphql/queries/get-product.query';
import { GetProductOutput } from '@/graphql/types/get-product.output';

export const useProduct = (productId: string) => {
  const { data, loading, error } = useQuery<GetProductOutput>(GET_PRODUCT_QUERY, {
    variables: { id: productId },
    fetchPolicy: 'network-only',
  });

  return {
    product: data?.product,
    loading,
    error
  };
};
