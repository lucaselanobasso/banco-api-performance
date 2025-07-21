import http from 'k6/http' //importação de um módulo
import { sleep, check } from 'k6' // importação de uma função
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { pegarBaseURL } from '../utils/variaveis.js'

//configurações de como o teste vai ser:
export const options = {
    //define o número de iterações para o teste
    stages: [
        {duration: '5s', target: 10},
        {duration: '20s', target: 10},
        {duration: '5s', target: 0},
    ],
    
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}

//o teste em si:
export default function () {
    // Teste!
    const url = pegarBaseURL() + '/login'
    //payload é o corpo da requisição, o body!
    const payload = JSON.stringify(postLogin)

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