// src\pages\Cardapio\index.js

import ListaCardapio from '../../components/ListaCardapio';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Cardapio() {
    const navigate = useNavigate();

    return (
        <div className='pagina-cardapio'>
            <div className='container'>
                <h2>CARDÁPIO</h2>
                <ListaCardapio />
                <button onClick={() => navigate('/pratos')} className='link-voltar'>
                    Cadastrar Prato
                </button>
            </div>
        </div>
    )
}

export default Cardapio;