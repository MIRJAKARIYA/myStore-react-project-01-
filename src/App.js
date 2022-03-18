import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <AllProducts></AllProducts>
    </div>
  );
}

export default App;
