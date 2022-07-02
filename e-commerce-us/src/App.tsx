import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/header/Header';
import { ProductDetails } from './components/productDetails/ProductDetails';
import { Products } from './pages/Products';

import { PRODUCTS_DETAILS_ROUTE, PRODUCTS_ROUTE } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PRODUCTS_ROUTE} element={<Products />}>
          <Route path={PRODUCTS_DETAILS_ROUTE} element={<ProductDetails />} />
        </Route>

        <Route path="*" element={<Navigate to={PRODUCTS_ROUTE} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
