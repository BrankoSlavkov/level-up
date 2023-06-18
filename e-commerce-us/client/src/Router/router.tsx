import { createBrowserRouter } from 'react-router-dom';

export const PRODUCTS_ROUTE = '/products';
export const PRODUCTS_DETAILS_ROUTE = ':id';

import { Products } from 'pages/Products';
import { ProductDetails } from 'components/productDetails/ProductDetails';

export const router = createBrowserRouter([
  {
    path: PRODUCTS_ROUTE,
    element: <Products />,
    children: [
      {
        path: PRODUCTS_DETAILS_ROUTE,
        element: <ProductDetails />,
      },
    ],
  },

  // {
  //   path: '*',
  //   element: <Products />,
  // },
]);
