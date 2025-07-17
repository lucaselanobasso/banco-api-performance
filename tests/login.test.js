import http from 'k6/http' //importação de um módulo
import { sleep, check } from 'k6' // importação de uma função

//configurações de como o teste vai ser:
export const options = {
    //define o número de iterações para o teste
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
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

    const res = http.post(url, payload, params)

    check(res, {
        'Validar que o status é 200': (r) => r.status === 200,
        'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
    })
    sleep(1)
}