import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Town101 from './components/Town101';
import Mart from './components/Mart';
import Admin from './components/Admin';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/product/1" element={<Town101/>}/>
            <Route path="/mart" element={<Mart/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
