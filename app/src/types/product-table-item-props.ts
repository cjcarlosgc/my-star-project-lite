import { GetProductsOutput } from "@/graphql/types/get-products.output";

export type ProductsTableProps = {
  product: GetProductsOutput;
  loading: boolean
};