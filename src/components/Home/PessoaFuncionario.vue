<template>
	<div>
		<div class="row">
			<div class="form-group col-sm-3 col-xs-6">
				<label for="funcionario-wizard" :class="{'help is-danger': errors.has('funcionario')}">FUNCIONÁRIO CAIXA?</label>
				<div class="funkyradio">
					 <div class="funkyradio-primary col-xs-6">
						<input type="radio" name="funcionario" value="1" id="funcionario-sim" 
						  v-model.number="funcionario" v-validate="{ rules: 'required|in:0,1', arg: 'funcionario' }" @change="onChange">  
						<label for="funcionario-sim" class="checkbox-inline">Sim</label>
					</div>
						<div class="funkyradio-primary col-xs-6">
						<input type="radio" name="funcionario" value="0" id="funcionario-nao" v-model.number="funcionario" @change="onChange"> 
						<label for="funcionario-nao" class="checkbox-inline">Não</label>
					</div>
				</div>
				<span v-show="errors.has('funcionario')" class="help is-danger">{{ errors.first('funcionario') }}</span>
			</div>

			<div class="form-group col-sm-3 col-xs-6" id="div-eventualidade" v-if="showFuncionario">
				<label for="eventualidade-wizard" :class="{'help is-danger': errors.has('eventual')}">EVENTUAL?</label>
				<div class="funkyradio">
					 <div class="funkyradio-success col-xs-6">								
						<input type="radio" name="eventual" value="1" id="eventualidade-sim" 
							v-model.number="eventual" v-validate="{ rules: 'required|in:0,1', arg: 'eventual' }" @change="onChange">
						<label for="eventualidade-sim" class="checkbox-inline">Sim</label>
					</div>
						<div class="funkyradio-success col-xs-6">								
						<input type="radio" name="eventual" value="0" id="eventualidade-nao" v-model.number="eventual" @change="onChange">
						<label for="eventualidade-nao" class="checkbox-inline">Não</label>
					</div>
				</div>
				<span v-show="errors.has('eventual')" class="help is-danger">{{ errors.first('eventual') }}</span>
			</div>

			<div class="form-group col-sm-6 col-xs-12" id="div-matricula" v-if="showFuncionario">
				<input-with-icon
					label="MATRÍCULA" 
					idspan="basic-addon-matricula-wizard" 
					icon="fa-id-badge" 
					name="matricula"
					placeholder="Matrícula (somente números e dígito verificador)" 
					idinput="matricula-wizard" 
					validate="required|max:8|matricula"
					mask="999999-9"></input-with-icon>
			</div>
		</div>

		<div id="div-funcionario" v-if="showFuncionario">
			<div class="row">
				<div class="form-group col-xs-6">
					<select-with-icon
						label="JORNADA" 
						idspan="basic-addon-jornada-wizard" 
						icon="fa-clock-o" 
						name="jornada"
						idinput="jornada-wizard" 
						validate="required"
						:options="optionsJornada"></select-with-icon>
				</div>
				<div class="form-group col-xs-6">
					<input-with-icon
						label="CÓDIGO UNIDADE" 
						idspan="basic-addon-unidade-wizard" 
						icon="fa-building-o" 
						name="unidade"
						placeholder="Unidade" 
						idinput="unidade-wizard" 
						validate="required|max:4"
						mask="9999"></input-with-icon>
				</div>
			</div>

			<div class="row">
				<div class="form-group col-xs-6">
					<select-with-icon
						label="CARGO" 
						idspan="basic-addon-cargo-wizard" 
						icon="fa-address-book-o" 
						name="cargo"
						idinput="cargo-wizard" 
						validate="required"
						:options="optionsCargo"></select-with-icon>
				</div>
				<div class="form-group col-xs-6">
					<input-with-icon
						label="DATA DE CONTRATAÇÃO" 
						idspan="basic-addon-contratacao-wizard" 
						icon="fa-building-o" 
						name="contratacao"
						placeholder="dd/mm/aaa" 
						idinput="contratacao-wizard" 
						validate="required|max:10|date_format:DD/MM/YYYY"
						mask="99/99/9999"></input-with-icon>
				</div>
			</div>

			<div class="row">
				<div class="form-group col-xs-6">
					<select-with-icon
						label="CHEFIA" 
						idspan="basic-addon-supervisor-wizard" 
						icon="fa-bell" 
						name="supervisor"
						idinput="supervisor-wizard" 
						validate="required"
						:options="optionsSupervisor"></select-with-icon>
				</div>
				<div class="form-group col-xs-3" id="div-senha">
					<label for="senha-wizard">SENHA</label>
					<div class="input-group">
						<span class="input-group-addon" id="basic-addon-senha-wizard" :class="{'input': true, 'is-danger': errors.has('senha'), 'is-valid': fields['senha'] && fields['senha'].valid}">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
						<input name="senha" type="password" class="form-control" placeholder="Senha" aria-describedby="basic-addon-senha-wizard" id="senha-wizard"
						  :class="{'input': true, 'is-danger': errors.has('senha'), 'is-valid': fields['senha'] && fields['senha'].valid}" 
              v-validate="'required|min:6|max:32'" @input="onChange" data-vv-name="senha">
					</div>
					<span v-show="errors.has('senha')" class="help is-danger">{{ errors.first('senha') }}</span>
				</div>
				<div class="form-group col-xs-3" id="div-conf-senha">
					<label for="conf-senha-wizard">CONFIRMAÇÃO SENHA</label>
					<div class="input-group">
						<span class="input-group-addon" id="basic-addon-conf-senha-wizard" :class="{'input': true, 'is-danger': errors.has('confsenha'), 'is-valid': fields['confsenha'] && fields['confsenha'].valid}" >
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
						<input name="confsenha" type="password" class="form-control" placeholder="Confirmação de Senha" aria-describedby="basic-addon-conf-senha-wizard" id="conf-senha-wizard"
							:class="{'input': true, 'is-danger': errors.has('confsenha'), 'is-valid': fields['confsenha'] && fields['confsenha'].valid}" 
         			v-validate="'required|min:6|max:32|confirmed:senha'" @input="onChange" data-vv-name="confsenha" data-vv-as="confirmação de senha">
					</div>
					<span v-show="errors.has('confsenha')" class="help is-danger">{{ errors.first('confsenha') }}</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import InputWithIcon from '../Inputs/InputWithIcon'
import SelectWithIcon from '../Inputs/SelectWithIcon'
export default {
  name: 'PessoaFuncionario',
  components: {
    'input-with-icon': InputWithIcon,
    'select-with-icon': SelectWithIcon
  },
  data () {
    return {
      funcionario: -1,
      eventual: -1,
      showFuncionario: false,
      optionsJornada: ['teste', 'teste1', 'teste2'],
      optionsCargo: ['s', 'a'],
      optionsSupervisor: ['sup1', 'sup23']
    }
  },
  watch: {
    funcionario () {
      this.showFuncionario = this.funcionario === 1
    }
  },
  mounted () {
    // pega o evento lançado pelo componente pai
    this.$bus.$on('validate2', () => {
      // valida todos os dados
      this.$validator.validateAll().then((result) => {
        // envia o resultado da validação para o componente pai
        this.$bus.$emit('validate-result2', result)
      })
    })
  },
  methods: {
    onChange: function (e) {
      this.$bus.$emit(e.target.name, e.target.value)
    }
  },
  beforeDestroy () {
    this.$bus.$off()
  }
}
</script>
