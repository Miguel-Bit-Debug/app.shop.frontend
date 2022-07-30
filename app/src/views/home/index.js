import React, { useEffect, useState } from "react";
import BuscarTodosProdutos from "../../services/produto/listarProdutosService";

export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        BuscarTodosProdutos(setData)
    }, [data])

    return(
        <>
        <div>
            {data.map(produto => (
                <div key={produto._id}>
                    <p>{produto.nome}</p>
                    <p>{produto.descricao}</p>
                    <p>{produto.valor}</p>
                    <p>{produto.createdAt}</p>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
        
        </>
    )
}
