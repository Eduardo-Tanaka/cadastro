import Vue from 'vue'
import Row from '../grid/Row'
import Column from '../grid/Column'
Vue.component('row', Row)
Vue.component('column', Column)

// verifica se o cpf digitado é válido
export function vercpf (cpf) {
  let _cpf = cpf.replace(/[^0-9]/g, '')
  if (_cpf.length !== 11 || _cpf === '00000000000' || _cpf === '11111111111' || _cpf === '22222222222' || _cpf === '33333333333' || _cpf === '44444444444' || _cpf === '55555555555' || _cpf === '66666666666' || _cpf === '77777777777' || _cpf === '88888888888' || _cpf === '99999999999') {
    return false
  }

  let add = 0
  for (let i = 0; i < 9; i++) {
    add += parseInt(_cpf.charAt(i)) * (10 - i)
  }

  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }

  if (rev !== parseInt(_cpf.charAt(9))) {
    return false
  }

  add = 0
  for (let i = 0; i < 10; i++) {
    add += parseInt(_cpf.charAt(i)) * (11 - i)
  }

  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }

  if (rev !== parseInt(_cpf.charAt(10))) {
    return false
  }

  return true
}
