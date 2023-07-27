import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* ✅ */}
      <Route path='/' element={<Landing />} />

      {/* TODO */}
      <Route path='/products' element={<Products />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path='/account' element={<UserDashboard />} />
        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path='/admin' element={<AdminDashboard />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
