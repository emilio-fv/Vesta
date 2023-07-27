import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Products from './pages/Products';
// import Product from './pages/Product';
import Cart from './pages/Cart';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/:category/products' element={<Products />} />
      {/* <Route path='/:id/product' element={<Product />} /> */}
      <Route path='/cart' element={<Cart />} />
      <Route element={<PrivateRoute />}>
        <Route path='/account' element={<UserDashboard />} />
        <Route element={<AdminRoute />}>
          <Route path='/admin' element={<AdminDashboard />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
