export type State = {
  id: number;
  name: string;
  tax: number;
};

export type StateState<T> = {
  isLoading: boolean;
  error: string | null;
  states: T[];
};
