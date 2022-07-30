import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import BuscarTodosProdutos from "../../services/produto/listarProdutosService";
import './home.css'

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        BuscarTodosProdutos(setData)
    }, [data])

    return (
        <>
        <Navbar />
            <div className="produtos">
                {data.map(produto => (
                    <div className="produto">
                        <div key={produto._id}>
                            <p>Produto: {produto.nome}</p>
                            <p>Descrição: {produto.descricao}</p>
                            <p>Valor: {produto.valor}</p>
                            <p>Criado em: {produto.createdAt}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
