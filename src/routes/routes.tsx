import { BrowserRouter as Router, Route, Routes as AppRoutes, Routes } from 'react-router-dom';

import Start from "../pages/Start";
import Login from "../pages/Login";

export default function App() { 
    return ( 
        <Router> 
            <Routes> 
                <Route path="/" element={<Start />} /> 
                <Route path="/login" element={<Login />} />
            </Routes> 
        </Router> 
    ); 
}