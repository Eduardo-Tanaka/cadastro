import { HTTP } from '../../main'

// realiza requisição para o backend validar se ele pode acessar a página
export function validaRota () {
  // pega a url da página acessada
  let url = window.location.pathname
  // todas as páginas do painel são bloqueadas para o mesmo acesso não funciona no IE => startsWith
  const arrayUrl = url.split('/')
  if (arrayUrl[2] === 'painel') {
    url = '/sihab_novo/painel'
  }

  return HTTP.post('autorizacao', { url: url })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      // console.log(response)
      var matr = response.matricula
      while (matr.length < 6) {
        matr = '0' + matr
      }

      // caso não tenha algum registro guardado no localStorage, faz a requisição para o ldap
      if (localStorage.getItem('matricula') === null && localStorage.getItem('nome') === null) {
        HTTP.get(`usuario/C${matr}`)
          .then(function (response) {
            console.log(response)
            localStorage.removeItem('matricula')
            localStorage.setItem('matricula', data.co_matricula)
            localStorage.removeItem('nome')
            localStorage.setItem('nome', data.no_nome)
            localStorage.removeItem('foto')
            localStorage.setItem('foto', data.co_foto)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      return true
    })
    .catch((error) => {
      localStorage.removeItem('isLogged')
      console.log(error)
      /* if (error === 'Usuário não incluído no grupo de acesso') {
        window.location.replace('../home/erro.html')
      }
      // se o token estiver expirado ou não existir o token retorna para a página de login
      else if (jqXHR.responseJSON.message === 'Expired token' || jqXHR.responseJSON.message === 'Wrong number of segments') {
        window.location.replace('../home/login.html')
      } */
      throw Error(error)
    })
}
