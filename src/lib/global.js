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

// verifica se o pis digitado é válido
export function verpis (pis) {
  let _pis = pis.replace(/[^0-9]/g, '')
  const multiplicadorBase = '3298765432'
  let total = 0
  let multiplicando = 0
  let multiplicador = 0
  let resto = 0
  let digito = 0
  if (_pis.length !== 11 || _pis === '00000000000' || _pis === '11111111111' || _pis === '22222222222' || _pis === '33333333333' || _pis === '44444444444' ||
    _pis === '55555555555' || _pis === '66666666666' || _pis === '77777777777' || _pis === '88888888888' || _pis === '99999999999') {
    return false
  }
  for (let i = 0; i < 10; i++) {
    multiplicando = parseInt(_pis.substring(i, i + 1))
    multiplicador = parseInt(multiplicadorBase.substring(i, i + 1))
    total += multiplicando * multiplicador
  }
  resto = 11 - total % 11
  resto = resto === 10 || resto === 11 ? 0 : resto
  digito = parseInt('' + _pis.charAt(10))
  return resto === digito
}

// verifica se a matricula digitada é válida
export function verMatricula (matr) {
  const digito = parseInt(matr.split('-')[1])
  let soma = 0
  for (let i = 0; i < 6; i++) {
    soma += matr.charAt(i) * (i + 2)
  }
  const resultado = soma % 11 === 10 ? 0 : soma % 11
  return resultado === digito
}
