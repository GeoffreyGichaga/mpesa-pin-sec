import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import Toolkit from './pages/Toolkit';
import Safaricom from './components/Safaricom';
import Mpesa from './components/Mpesa';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/toolkit' element={<Toolkit/>}>
        <Route path='safaricom' element={<Safaricom/>}/>
        <Route path='mpesa' element={<Mpesa/>}/>
      </Route>

      
    </Routes>
  );
}

export default App;
