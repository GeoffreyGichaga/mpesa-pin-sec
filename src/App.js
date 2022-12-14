import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import Toolkit from './pages/Toolkit';
import SafMenu from './pages/SafMenu';
import MpesaMenu from './pages/MpesaMenu';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/toolkit' element={<Toolkit/>}/>
      <Route path='safmenu' element={<SafMenu/>}/>
      <Route path='mpesamenu' element={<MpesaMenu/>}/>
      

      
    </Routes>
  );
}

export default App;
