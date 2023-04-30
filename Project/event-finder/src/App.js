import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
// import Posts from './components/Posts';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header title={"EventFinder"}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About heading='About Us'/>} />
            {/* <Route path="/" element={<Posts/>} /> */}
            <Route path="/" element={<TextForm heading="Enter the text here to Analyze here"/>} />
            <Route path="/events" element={<Events/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
