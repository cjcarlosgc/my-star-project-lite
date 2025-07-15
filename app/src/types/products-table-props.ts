import { ProductEntity } from "@/graphql/types/product.entity";

export type ProductsTableProps = {
  products: ProductEntity[];
  loading: boolean;
  handleRowClick: (productId: string) => void; 
};
