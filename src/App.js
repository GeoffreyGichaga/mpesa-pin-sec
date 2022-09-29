import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import Sim from './pages/Sim';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/safaricom' element={<Sim/>}/>
    </Routes>
  );
}

export default App;
