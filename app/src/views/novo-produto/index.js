import React, { useState } from "react";
import Navbar from '../../components/navbar'
import AdicionarProduto from '../../services/produto/adicionarProdutoService'
import { Link } from 'react-router-dom'
import './novo-produto.css'

export default function NovoProduto() {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState(0)

    const produto = {
        nome: nome,
        descricao: descricao,
        valor: valor
    }

    return (
        <div>
            <Navbar />
            <div className="adicionar-produto-container">
                <input onChange={((e) => setNome(e.target.value))} type="text" placeholder="Nome do produto" required />
                <input onChange={((e) => setDescricao(e.target.value))} type="text" placeholder="Descrição do produto" required />
                <input onChange={((e) => setValor(e.target.value))} type="number" placeholder="Valor do produto" required />
                <Link className="botao-adicionar-produto" to="/" onClick={() => AdicionarProduto(produto)}>Adicionar Produto</Link>
            </div>

        </div>
    )
}
