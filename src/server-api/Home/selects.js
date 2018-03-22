import { HTTP } from '../../main'

export function fetchPessoaFisica () {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      resolve(require('mock-server/pessoa-fisica.json'))
    })
  } else {
    return HTTP.get('/pessoa/funcionario')
    .then((response) => {
      console.log(response)
      if (response.statusText !== 'OK') {
        throw Error('Usuário ou Senha Inválidos!!!')
      }

      return response
    })
    .catch((error) => {
      throw Error(error)
    })
  }
}
