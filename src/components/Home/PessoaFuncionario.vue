<template>
	<div>
		<div class="row">
			<div class="form-group col-sm-6 col-xs-12" id="div-matricula">
				<input-with-icon
				  :value="form.matricula + form.matriculaDV"
				  @inputToParent="passToParent"
					label="MATRÍCULA" 
					idspan="basic-addon-matricula-wizard" 
					icon="fa-id-badge" 
					name="raw_matricula"
					placeholder="Matrícula (somente números e dígito verificador)" 
					idinput="matricula-wizard" 
					validate="required|max:8|matricula"
					mask="999999-9"></input-with-icon>
			</div>
		</div>

		<div id="div-funcionario">
			<div class="row">
				<div class="form-group col-xs-6">
					<select-with-icon
					  :value="form.jornada"
					  @inputToParent="passToParent"
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
					  :value="form.unidade"
					  @inputToParent="passToParent"
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
					  @inputToParent="passToParent"
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
					  @inputToParent="passToParent"
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
  inject: ['$validator'],
  name: 'PessoaFuncionario',
  components: {
    'input-with-icon': InputWithIcon,
    'select-with-icon': SelectWithIcon
  },
  data () {
    return {
      eventual: -1,
      optionsJornada: [{codigo: 1, desc: 'teste'}],
      optionsCargo: ['s', 'a'],
      optionsSupervisor: ['sup1', 'sup23']
    }
  },
  props: {
    form: {
      type: Object,
      default: {}
    }
  },
  methods: {
    passToParent (name, value) {
      this.$emit('inputToParent', name, value)
    },
    onChange: function (e) {
      this.$emit('inputToParent', e.target.name, e.target.value)
    }
  }
}
</script>
