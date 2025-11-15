import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <ToastContainer theme='dark' position="top-center"/>
      <header className="App-header">
        
        <Router>
          <div>
            <Header cartItems={cartItems}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>} />
              <Route path="/cart" element={<Cart  cartItems={cartItems} setCartItems={setCartItems}/>} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
