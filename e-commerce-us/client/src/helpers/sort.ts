import { Product } from '../store/product/productTypes';

export const sortByName = (products: Product[]) => {
  return products.sort((firstProduct, nextProduct) => firstProduct.title.localeCompare(nextProduct.title));
};

export const sortByPrice = (products: Product[]) => {
  return products.sort((firstProduct, nextProduct) => firstProduct.price - nextProduct.price);
};
