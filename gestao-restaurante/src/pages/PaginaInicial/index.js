// src\pages\PaginaInicial\index.js

import logo from '../../assets/images/logo.png';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function PaginaInicial() {
    const navigate = useNavigate();

    const irParaCardapio = () => {
        navigate('/pratos');
    };

    return (
        <div className='pagina-inicial'>
            <img src={logo} alt="Logo" />
            <h1>Bota um Prato de comida ai pra mim</h1>
            <button onClick={irParaCardapio} className='link-cadastro'>
                Ir para Cadastrar Prato</button>
            <button onClick={() => navigate('/cardapio')} className='link-lista'>
                Ir para cardapio</button>
        </div>
    )
}