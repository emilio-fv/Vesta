import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';
import Cart from './views/Cart';
import UserDashboard from './views/UserDashboard';
import AdminDashboard from './views/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
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
