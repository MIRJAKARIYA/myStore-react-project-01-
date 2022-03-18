import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const updateCount = () => setCartCount(cartCount + 1);
  const decCount = () => setCartCount(cartCount - 1);
  return (
    <div className="App">
        <Navbar count={cartCount}></Navbar>
        <AllProducts updateCount={updateCount} decCount={decCount}></AllProducts>
    </div>
  );
}

export default App;
