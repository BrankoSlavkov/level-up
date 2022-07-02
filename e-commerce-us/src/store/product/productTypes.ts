export type Product = {
  id: number;
  title: string;
  price: number;
  stateId: number;
  categoryId: number;
  stock: boolean;
  picture: string;
  description: string;
};

export type ProductState<T> = {
  isLoading: boolean;
  error: string | null;
  products: T[];
};

export type ProductsSortBy = 'price' | 'name';

export type ProductFormData = Omit<Product, 'id' | 'stock'>;
