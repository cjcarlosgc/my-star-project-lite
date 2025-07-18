import { ProductEntity } from "@/graphql/types/product.entity";

export type ProductsTableProps = {
  products: ProductEntity[];
  loading: boolean;
  handleSeeProductClick: (productId: string) => void;
  handleEditProductClick: (productId: string) => void;
  handleDeleteProductClick: (productId: string) => void; 
};
