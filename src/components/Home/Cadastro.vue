<template>
  <div>  
    <form-wizard @on-complete="onComplete"
      title="Cadastro SIHAB"
      subtitle=""
      shape="circle"
      back-button-text="Voltar"
      next-button-text="Próximo"
      finish-button-text="Enviar"
      color="#3498db"
      ref="wizard">
      <tab-content title="DADOS PESSOAIS" :before-change="beforeTabSwitch">
        <pessoa-fisica></pessoa-fisica>
      </tab-content>
      <tab-content title="DADOS PROFISSIONAIS">
          My second tab content
       </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import PessoaFisica from './PessoaFisica'
export default {
  name: 'HomeCadastro',
  components: {
    'pessoa-fisica': PessoaFisica
  },
  data () {
    return {
      nome: '',
      cpf: '',
      pis: '',
      rg: '',
      ctps: '',
      nascimento: '',
      nacionalidade: '',
      stepValid: false
    }
  },
  mounted () {
    // pega o resultado da validação do componente filho
    this.$bus.$on('validate-result', (result) => {
      this.stepValid = result
    })
    // pega o evento disparado do input do elemento filho e guarda no estado do component pai
    this.$bus.$on('nome', (value) => { this.nome = value })
    this.$bus.$on('cpf', (value) => { this.cpf = value })
    this.$bus.$on('pis', (value) => { this.pis = value })
    this.$bus.$on('rg', (value) => { this.rg = value })
    this.$bus.$on('ctps', (value) => { this.ctps = value })
    this.$bus.$on('nacionalidade', (value) => { this.nacionalidade = value })
  },
  methods: {
    onComplete: function () {
    },
    // roda antes de mudar de Tab
    beforeTabSwitch: function () {
      // emite o evento para o componente filho rodar a validação
      this.$bus.$emit('validate')
      // espera a resposta do evento validate-result para saber se há erros ou não
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.stepValid)
        }, 100)
      })
    }
  }
}
</script>
