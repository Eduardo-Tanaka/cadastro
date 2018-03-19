import { HTTP } from '../../main'

export function fetchLogin () {
  return HTTP.get('posts')
  .then((response) => {
    if (!response.ok) {
      throw Error('Usuário ou Senha Inválidos!!!')
    }

    return response.json()
  })
  .catch((error) => {
    throw Error(error)
  })
}
