'use client';

import { GET_PRODUCTS_QUERY } from '@/graphql/queries/get-products.query';
import { useQuery } from '@apollo/client';

export const useProducts = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS_QUERY);

  return {
    products: data?.products || [],
    loading,
    error,
  };
};
