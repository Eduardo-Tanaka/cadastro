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
        <pessoa-funcionario></pessoa-funcionario>
       </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import PessoaFisica from './PessoaFisica'
import PessoaFuncionario from './PessoaFuncionario'
export default {
  name: 'HomeCadastro',
  components: {
    'pessoa-fisica': PessoaFisica,
    'pessoa-funcionario': PessoaFuncionario
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
      est_civil: '',
      stepValid: false,
      funcionario: '',
      eventual: '',
      matricula: '',
      jornada: '',
      unidade: '',
      cargo: '',
      contratacao: '',
      supervisor: '',
      senha: '',
      confsenha: ''
    }
  },
  mounted () {
    // pega o resultado da validação do componente filho
    this.$bus.$on('validate-result', (result) => {
      this.stepValid = result

      if (!result) {
        this.$toasted.error('Dados Inválidos!!!', { icon: 'times' })
      }
    })
    this.$bus.$on('validate-result2', (result) => {
      if (!result) {
        this.$toasted.error('Dados Inválidos!!!', { icon: 'times' })
      } else {
        alert('cadastrado')
      }
    })
    for (let item in this.$data) {
      // pega o evento disparado do input do elemento filho e guarda no estado do component pai
      this.$bus.$on(item, (value) => { this.$data[item] = value })
    }
  },
  methods: {
    onComplete: function () {
      // emite o evento para o componente filho rodar a validação
      this.$bus.$emit('validate2')
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
    },
    beforeDestroy () {
      this.$bus.$off()
    }
  }
}
</script>
