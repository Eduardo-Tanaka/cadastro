import { HTTP } from '../../main'

export function fetchLogin () {
  return HTTP.get('/decks')
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
