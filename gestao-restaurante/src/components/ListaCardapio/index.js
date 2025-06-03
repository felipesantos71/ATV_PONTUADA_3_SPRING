// src\components\ListaCardapio\index.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function ListaCardapio() {
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                const response = await axios.get('https://api.example.com/cardapio');
                setPratos(response.data);
            } catch (error) {
                console.error('Erro ao carregar os pratos:', error);
                setPratos([]);
            }
        };
        carregarPratos(); // Call the function here
    }, []);

    return (
        <ul id='cardapio' className='lista-cardapio'>
            {pratos.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                pratos.map(prato => (
                    <li key={prato.id}>
                        <strong>Prato: </strong> {prato.nome}<br />
                        <strong>Descricao: </strong> {prato.descricao}<br />
                        <strong>Preço: </strong> R$ {prato.preco.toFixed(2)}<br />
                        <strong>Categoria: </strong> {prato.categoria}<br />
                        <strong>Disponível: </strong> {prato.disponivel}<br />
                        <strong>Imagem: </strong> <img src={prato.imagem} 
                        alt={prato.nome} className='imagem-prato' /><br />
                    </li>
                ))
            )}
        </ul>
    );
}

export default ListaCardapio;