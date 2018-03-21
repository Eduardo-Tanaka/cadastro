import { vercpf, verpis, verMatricula } from './global.js'

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

export const validatorMatricula = {
  getMessage (field, args) {
    return 'A ' + field + ' é inválida.'
  },
  validate (value, args) {
    // Returns a Boolean or a Promise.
    return verMatricula(value)
  }
}
