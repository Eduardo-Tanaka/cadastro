<template>
  <div>
    <pessoa-funcionario @inputToParent="handleInputValue"></pessoa-funcionario>
    <button @click="salvar">salvar</button>
  </div>
</template>

<script>
const PessoaFuncionario = () => import('./PessoaFuncionario')
// import PessoaFisica from './PessoaFisica'
// import PessoaFuncionario from './PessoaFuncionario'
export default {
  name: 'HomeCadastro',
  components: {
    'pessoa-funcionario': PessoaFuncionario
  },
  data () {
    return {
      form: {
        funcionario: '',
        eventual: '',
        raw_matricula: '',
        matricula: '',
        matriculaDV: '',
        jornada: '',
        unidade: '',
        cargo: '',
        contratacao: '',
        supervisor: '',
        senha: '',
        confsenha: ''
      }
    }
  },
  computed: {
    raw_matricula () {
      return this.form.raw_matricula
    }
  },
  watch: {
    raw_matricula (e) {
      this.form.matriculaDV = e.split('-')[1]
      this.form.matricula = e.split('-')[0]
    }
  },
  methods: {
    handleInputValue (name, value) {
      this.form[name] = value
    },
    salvar () {
      this.$validator.validateAll().then((result) => {
        // envia o resultado da validação para o componente pai
        alert(result)
        this.$toasted.error('erro')
      })
    }
  }
}
</script>
