import axios from "axios";

async function BuscarTodosProdutos(setData) {
    await axios.get('http://localhost:8081/v1/api')
        .then((res) => {
            setData(res.data.produtos)
        }).catch((error) => {
            console.log(error)
        })
}

export default BuscarTodosProdutos
