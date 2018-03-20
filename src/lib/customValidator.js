import { vercpf, verpis } from './global.js'

export const validatorCpf = {
  getMessage (field, args) {
    return 'O ' + field + ' é inválido.'
  },
  validate (value, args) {
    // Returns a Boolean or a Promise.
    return vercpf(value)
  }
}

export const validatorPis = {
  getMessage (field, args) {
    return 'O ' + field + ' é inválido.'
  },
  validate (value, args) {
    // Returns a Boolean or a Promise.
    return verpis(value)
  }
}
