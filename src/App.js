import './App.css';
import Body from './Components/Body';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Qr from './Components/Qr';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/qr" element={<Qr />} />
      </Routes>
    </BrowserRouter>
      
      
    </div >
  );
}

export default App;
