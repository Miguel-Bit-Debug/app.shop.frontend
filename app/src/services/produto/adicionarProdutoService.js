import axios from 'axios';

export default function AdicionarProduto(produto) {
    axios.post('http://localhost:8081/v1/api/novo-produto', produto)
    .then()
    .catch((error) => {
        console.log(error)
    })
}
