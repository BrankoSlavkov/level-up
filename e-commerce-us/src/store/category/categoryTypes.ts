export type Category = {
  id: number;
  name: string;
};

export type CategoryState<T> = {
  isLoading: boolean;
  error: string | null;
  categories: T[];
};
