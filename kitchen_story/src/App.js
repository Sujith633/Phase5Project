import Navbar from './components/Navbar';
import './App.css';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from './components/AddProduct';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <div className='container my-3'>
          <Routes>
            {/* <Route path="/about" element={<About heading='About Us'/>} /> */}
            <Route path="/allproducts" element={<Home/>} />
            {/* <Route path="/" element={<TextForm heading="Enter the text here to Analyze here"/>} /> */}
            <Route path="/add" element={<AddProduct/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
