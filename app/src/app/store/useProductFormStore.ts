import { ProductFormStore } from "@/types/product-form-store";
import { create } from "zustand";

export const useProductFormStore = create<ProductFormStore>(set => ({
    currentProduct: null,
    setCurrentProduct: (product) => set({ currentProduct: product })
}));