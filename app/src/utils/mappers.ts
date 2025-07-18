// import { CreateProductInputRoot } from '@/graphql/types/create-product.input';
import { DeleteProductInputRoot } from '@/graphql/types/delete-product.input';
import { EditProductInputRoot } from '@/graphql/types/edit-product.input';
import { ProductEntity } from '@/graphql/types/product.entity';
import { ProductFormData } from '@/types/product-form-data';

export function mapProductToFormData(product: ProductEntity | undefined): ProductFormData | null {
  if (!product) {
    return null;
  }
  return {
    id: product?.id ?? null,
    description: product?.description ?? null,
    unitPrice: product?.unitPrice.toString() ?? null,
    brand: product?.brand ?? null,
  } as ProductFormData;
}

// export function mapProductFormDataToCreate(productFormData: ProductFormData) {
//   return {
//     input: {
//       description: productFormData?.description,
//       brand: productFormData?.brand,
//       unitePrice: Number(productFormData?.unitPrice)
//     }
//   } as CreateProductInputRoot
// }

export function mapProductFormDataToEdit(productFormData: ProductFormData) {
  return {
    input: {
      id: productFormData?.id,
      description: productFormData?.description,
      brand: productFormData?.brand,
      unitPrice: Number(productFormData?.unitPrice)
    }
  } as EditProductInputRoot
}

export function mapProductFormDataToDelete(productId: string) {
  return {
    input: {
      id: productId
    }
  } as DeleteProductInputRoot
}

