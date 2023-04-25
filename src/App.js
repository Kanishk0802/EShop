import "./App.css";

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header/><Home/></>}/>
          <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
