import { BrowserRouter as Router, Route, Routes as AppRoutes, Routes } from 'react-router-dom';

import Start from "../pages/Start";
import Login from "../pages/Login";
import Cadastrar from "../pages/CadastrarEmail";

export default function App() { 
    return ( 
        <Router> 
            <Routes> 
                <Route path="/" element={<Start />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/cadastraremail" element={<Cadastrar/>} />
            </Routes> 
        </Router> 
    ); 
}