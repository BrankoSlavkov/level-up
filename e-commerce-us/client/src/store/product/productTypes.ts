export type Product = {
  id: number;
  title: string;
  price: number;
  stateId: string;
  categoryId: string;
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

export type ProductFormData = Omit<Product, 'id'>;
