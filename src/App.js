import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './EcommerceAssignment/Components/Navbar';
import ProductList from './EcommerceAssignment/Components/ProductList';
import ProductDetails from './EcommerceAssignment/Components/ProductDetails';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path="/product/:productId" element={ProductDetails} />
      </Routes>
    </Router>
  );
}

export default App;
