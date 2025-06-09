// src\App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import CadastroPrato from './pages/CadastroPrato';
import Cardapio from './pages/Cardapio';
import './App.css'; // Para estilos globais

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PaginaInicial />} />
                    <Route path="/pratos" element={<CadastroPrato />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
