// src\components\FormularioCadastro\index.js

import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function FormularioCadastro() {
    const [nomePrato, setNomePrato] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [disponibilidade, setDisponibilidade] = useState(false);
    const [imagemUrl, setImagemUrl] = useState('');

    const navigate = useNavigate();
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastroPrato = async (e) => {
        try {
            const response = await axios.post('http://localhost:3001/pratos', {nomePrato, 
                descricao, preco, categoria, disponibilidade, imagemUrl});
            exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso');
            setNomePrato('');
            setDescricao('');
            setPreco('');
            setCategoria('');
            setDisponibilidade('');
            setImagemUrl('');

        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.';
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ': ' + error.response.data.erros.join(', ');
                }
            }
            exibirMensagem(erroMsg, 'erro');
        }
    }

return (
    <div className='container'>
        <img src={logo} alt="Logo do restaurante" />
        <h2>Cadastro Pratos</h2>
        <form onSubmit={(e) => {e.preventDefault(); cadastroPrato();}}>
            <input
                type="text"
                placeholder="Nome do prato"
                value={nomePrato}
                onChange={(e) => setNomePrato(e.target.value)}
                required
            />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                />
                <input
                    type='text'
                    placeholder='Disponibilidade' 
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL da Imagem"
                    value={imagemUrl}
                    onChange={(e) => setImagemUrl(e.target.value)}
                    required
                />
                <button type='submit'>CADASTRAR</button>
            </form>

            <button onClick={() => navigate('/pratos')} className='link-pratos'>
                ver CARDAPIO
            </button>

            <button onClick={() => navigate('/')} className='link-home'>
                Pagina Inicial
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={mensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro;