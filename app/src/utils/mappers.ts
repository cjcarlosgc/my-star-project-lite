// import { CreateProductInputRoot } from '@/graphql/types/create-product.input';
import { CreateProductInputRoot } from '@/graphql/types/create-product.input';
import { DeleteProductInputRoot } from '@/graphql/types/delete-product.input';
import { EditProductInputRoot } from '@/graphql/types/edit-product.input';
import { LoginOutput } from '@/graphql/types/login.output';
import { ProductEntity } from '@/graphql/types/product.entity';
import { LoginUser } from '@/types/login-user';
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

export function mapProductFormDataToCreate(productFormData: ProductFormData): CreateProductInputRoot {
  return {
    input: {
      description: productFormData?.description || '',
      brand: productFormData?.brand || '',
      unitPrice: Number(productFormData?.unitPrice)
    }
  };
}

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

export function mapLoginUserOutputToLoginUser(loginUserOutput: LoginOutput) : LoginUser {
  return {
    fullName: `${loginUserOutput.firstName} ${loginUserOutput.lastName}`,
    role: loginUserOutput.role,
    userId: loginUserOutput.userId,
    userName: loginUserOutput.userName,
    menuItems: loginUserOutput.menuItems,
  }
}

