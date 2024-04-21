import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import { Pag1 } from './pages/pag1';
import { Pag2 } from './pages/pag2';
import { Pag3 } from './pages/pag3';

export function RouterApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/pag1' element={<Pag1/>} />
            <Route path='/pag2' element={<Pag2/>} />
            <Route path='/pag3' element={<Pag3/>} />
        </Routes>
        </BrowserRouter>
    );
}