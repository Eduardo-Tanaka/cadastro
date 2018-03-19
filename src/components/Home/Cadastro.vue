<template>
  <div>  
    <form-wizard @on-complete="onComplete"
       title="Cadastro SIHAB"
       subtitle=""
       shape="circle"
       back-button-text="Voltar"
       next-button-text="Próximo"
       finish-button-text="Enviar"
       color="#3498db">
      <tab-content title="DADOS PESSOAIS" icon="ti-settings">
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
      nome: ''
    }
  },
  created () {
    this.$bus.$on('teste', (value) => { this.nome = value })
  },
  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    }
  }
}
</script>
