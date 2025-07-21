import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'))
import { pegarBaseURL } from '../utils/variaveis.js'

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias'

  const payload = JSON.stringify(postTransferencias)

  const params = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
    }
  
    const res = http.post(url, payload, params)

    check(res, {
      "status é 201": (res) => res.status === 201
    })

    sleep(1)
}
