export type Category = {
  id: string;
  name: string;
};

export type CategoryState<T> = {
  isLoading: boolean;
  error: string | null;
  categories: T[];
};
