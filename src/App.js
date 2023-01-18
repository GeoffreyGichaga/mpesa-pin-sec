import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import Toolkit from './pages/Toolkit';
import SafMenu from './pages/SafMenu';
import MpesaMenu from './pages/MpesaMenu';
import EnterNo from './pages/EnterNO';
import Amount from './pages/Amount';
import Pin from './pages/Pin'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/toolkit' element={<Toolkit/>}/>
      <Route path='/safmenu' element={<SafMenu/>}/>
      <Route path='/mpesamenu' element={<MpesaMenu/>}/>
      <Route path='/enternumber' element={<EnterNo/>}/>
      <Route path='/amount' element={<Amount/>}/>
      <Route path='/pin' element={<Pin/>}/>


      

      
    </Routes>
  );
}

export default App;
