<template>
	<div>
		<div class="row">
			<div class="form-group col-sm-12">
				<label for="nome-wizard">NOME</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-nome-wizard"><i class="fa fa-user" aria-hidden="true"></i></span>
					<div class="control has-icon has-icon-right">
						<input name="nome" type="text" class="form-control" placeholder="Nome" aria-describedby="basic-addon-nome-wizard" id="nome-wizard"
							:class="{'input': true, 'is-danger': errors.has('nome') }" v-validate="'required'" @input="onChange" v-model="nome">
						<i v-show="errors.has('nome')" class="fa fa-times"></i>
					</div>
				</div>
				<span v-show="errors.has('nome')" class="help is-danger">{{ errors.first('nome') }}</span>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<input-cadastro-pessoa 
					label="CPF" 
					idspan="basic-addon-cpf-wizard" 
					icon="fa-address-card-o" 
					name="cpf" 
					placeholder="CPF xxx.xxx.xxx-xx" 
					idinput="cpf-wizard" 
					validate="required|cpf"
					mask="999.999.999-99"></input-cadastro-pessoa>
			</div>
			<div class="form-group col-xs-6">
				<label for="pis-wizard">PIS</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-pis-wizard"><i class="fa fa-address-card-o" aria-hidden="true"></i></span>
					<input name="pis" type="text" class="form-control" placeholder="PIS" aria-describedby="basic-addon-pis-wizard" id="pis-wizard" data-value="data_pis"
						data-validation="required"	
						data-validation-error-msg="O PIS digitado é inválido">
				</div>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<label for="rg-wizard">RG</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-rg-wizard"><i class="fa fa-id-card" aria-hidden="true"></i></span>
					<input maxlength="20" name="rg" type="text" class="form-control" placeholder="RG" aria-describedby="basic-addon-rg-wizard" id="rg-wizard"
						data-validation="required length"
						data-validation-length="max20">
				</div>
			</div>
			<div class="form-group col-xs-6">
				<label for="ctps-wizard">CTPS</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-ctps-wizard"><i class="fa fa-id-card" aria-hidden="true"></i></span>
					<input maxlength="20" name="ctps" type="text" class="form-control" placeholder="CTPS (número e série)" aria-describedby="basic-addon-ctps-wizard" id="ctps-wizard"
						data-validation="required length"
						data-validation-length="max20">
				</div>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<label for="nacionalidade-wizard">NACIONALIDADE</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-nacionalidade-wizard"><i class="fa fa-home" aria-hidden="true"></i></span>
					<select name="nacionalidade" class="form-control" aria-describedby="basic-addon-nacionalidade-wizard" id="nacionalidade-wizard" data-value="data-nacionalidade" data-validation="required">
						<option value="">Selecione</option>
					</select>
				</div>
			</div>
			<div class="form-group col-xs-6">
				<label for="data-nascimento-wizard">DATA DE NASCIMENTO</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-data-nascimento-wizard"><i class="fa fa-birthday-cake" aria-hidden="true"></i></span>
					<input name="nascimento" type="text" class="form-control" placeholder="dd/mm/aaaa" aria-describedby="basic-addon-data-nascimento-wizard" id="data-nascimento-wizard"
						data-validation="required length date"	
						data-validation-format="dd/mm/yyyy"
						data-validation-length="10" >
				</div>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<label for="estado-civil-wizard">ESTADO CIVIL</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-estado-civil-wizard"><i class="fa fa-bell-o" aria-hidden="true"></i></span>
					<select name="est_civil" class="form-control" aria-describedby="basic-addon-estado-civil-wizard" id="estado-civil-wizard"
						data-validation="required">
						<option value="">Selecione</option>
					</select>
				</div>
			</div>
			<div class="form-group col-xs-6 hide" id="div-reg-casamento">
				<label for="reg-casamento-wizard">REGIME DE CASAMENTO</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-reg-casamento-wizard"><i class="fa fa-bell" aria-hidden="true"></i></span>
					<select name="casamento" class="form-control" aria-describedby="basic-addon-reg-casamento-wizard" id="reg-casamento-wizard" 
						data-validation="required"
						data-validation-depends-on="est_civil"
						data-validation-depends-on-value="2">
						<option value="">Selecione</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CadastroInput from './CadastroInput'
export default {
  name: 'PessoaFisica',
  components: {
    'input-cadastro-pessoa': CadastroInput
  },
  data () {
    return {
      nome: ''
    }
  },
  methods: {
    onChange: function () {
      this.$bus.$emit('teste', this.nome)
    }
  }
}
</script>
