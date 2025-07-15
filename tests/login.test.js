import http from 'k6/http' //importação de um módulo
import { sleep } from 'k6' // importação de uma função

//configurações de como o teste vai ser:
export const options = {
    //define o número de iterações para o teste
    iterations: 10,
}

//o teste em si:
export default function () {
    // Teste!
    const url = 'http://localhost:3000/login'

    //payload é o corpo da requisição, o body!
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    })

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    }

    const resposta = http.post(url, payload, params)
    sleep(1)
}