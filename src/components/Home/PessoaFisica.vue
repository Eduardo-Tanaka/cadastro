<template>
	<div>
		<div class="row">
			<div class="form-group col-sm-12">
				<input-with-icon
					label="Nome" 
					idspan="basic-addon-nome-wizard" 
					icon="fa-user" 
					name="nome" 
					placeholder="Nome" 
					idinput="nome-wizard" 
					validate="required"></input-with-icon>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<input-with-icon
					label="CPF" 
					idspan="basic-addon-cpf-wizard" 
					icon="fa-address-card-o" 
					name="cpf" 
					placeholder="CPF xxx.xxx.xxx-xx" 
					idinput="cpf-wizard" 
					validate="required|cpf"
					mask="999.999.999-99"></input-with-icon>
			</div>
			<div class="form-group col-xs-6">
				<input-with-icon 
					label="PIS" 
					idspan="basic-addon-pis-wizard" 
					icon="fa-address-card-o" 
					name="pis" 
					placeholder="PIS" 
					idinput="pis-wizard" 
					validate="required|pis"
					mask="999.9999.999-9"></input-with-icon>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<input-with-icon 
					label="RG" 
					idspan="basic-addon-rg-wizard" 
					icon="fa-id-card" 
					name="rg" 
					placeholder="RG" 
					idinput="rg-wizard" 
					validate="required|max:20"></input-with-icon>
			</div>
			<div class="form-group col-xs-6">
				<input-with-icon
					label="CTPS" 
					idspan="basic-addon-ctps-wizard" 
					icon="fa-id-card" 
					name="ctps"
					placeholder="CTPS (número e série)" 
					idinput="ctps-wizard" 
					validate="required|max:20"></input-with-icon>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<select-with-icon
					label="NACIONALIDADE" 
					idspan="basic-addon-nacionalidade-wizard" 
					icon="fa-home" 
					name="nacionalidade"
					idinput="nacionalidade-wizard" 
					validate="required"
					:options="optionsNacionalidade"></select-with-icon>
			</div>
			<div class="form-group col-xs-6">
				<label for="data-nascimento-wizard" :class="{'error': errors.has('nascimento'), 'valid': fields['nascimento'] && fields['nascimento'].valid}">DATA DE NASCIMENTO</label>
				<div class="input-group">
					<span class="input-group-addon" id="basic-addon-data-nascimento-wizard" :class="{'input': true, 'is-danger error': errors.has('nascimento'), 'is-valid valid': fields['nascimento'] && fields['nascimento'].valid}">
						<i class="fa fa-birthday-cake" aria-hidden="true"></i>
					</span>
					<div class="control has-icon has-icon-right">
						<input name="nascimento" v-model="dataNascimento" class="form-control" @input="onChange2" @focus="onFocus" @blur="onBlur" type="text" v-mask="'99/99/9999'" v-validate="'required|max:10|date_format:DD/MM/YYYY'" :class="{'input': true, 'is-danger': errors.has('nascimento'), 'is-valid': fields['nascimento'] && fields['nascimento'].valid}"  placeholder="dd/mm/aaaa"/>			
						<i v-show="errors.has('nascimento')" class="fa fa-times"></i>
	        	<i v-show="fields['nascimento'] && fields['nascimento'].valid" class="fa fa-check"></i>
	        </div>
				</div>
				<span v-show="errors.has('nascimento')" class="help is-danger">{{ errors.first('nascimento') }}</span>
				<datepicker v-show="showDatePicker" :inline="true" v-model="date" @input="onChange" :input-class="{'form-control': true, 'input': true, 'is-danger': errors.has('nascimento'), 'is-valid': fields['nascimento'] && fields['nascimento'].valid}" id="data-nascimento-wizard" format="dd/MM/yyyy" v-validate="'required'" language="pt-br"></datepicker>
			</div>
		</div>

		<div class="row">
			<div class="form-group col-xs-6">
				<select-with-icon
					label="ESTADO CIVIL" 
					idspan="basic-addon-estado-civil-wizard" 
					icon="fa-bell-o" 
					name="est_civil"
					alias="estado civil"
					idinput="estado-civil-wizard" 
					validate="required"
					:options="optionsEstadoCivil"></select-with-icon>
			</div>
			<div class="form-group col-xs-6" id="div-reg-casamento" v-if="showRegimeCasamento">
				<select-with-icon
					label="REGIME DE CASAMENTO" 
					idspan="basic-addon-reg-casamento-wizard" 
					icon="fa-bell" 
					name="casamento"
					alias="regime de casamento"
					idinput="reg-casamento-wizard" 
					validate="required"
					:options="optionsRegimeCasamento"></select-with-icon>
			</div>
		</div>
	</div>
</template>

<script>
import { fetchPessoaFisica } from '../../server-api/home/selects'
import InputWithIcon from '../Inputs/InputWithIcon'
import SelectWithIcon from '../Inputs/SelectWithIcon'
import moment from 'moment'
moment.locale('pt-br')
export default {
  name: 'PessoaFisica',
  components: {
    'input-with-icon': InputWithIcon,
    'select-with-icon': SelectWithIcon
  },
  data () {
    return {
      dataNascimento: '',
      date: '',
      showRegimeCasamento: false,
      showDatePicker: false,
      optionsNacionalidade: [],
      optionsEstadoCivil: [],
      optionsRegimeCasamento: []
    }
  },
  mounted () {
    fetchPessoaFisica()
      .then(resp => {
        console.log(resp)
        this.optionsNacionalidade = resp.nacionalidade
        this.optionsEstadoCivil = resp.estado_civil
        this.optionsRegimeCasamento = resp.casamento
      })
    // pega o evento lançado pelo componente pai
    this.$bus.$on('validate', () => {
      // valida todos os dados
      this.$validator.validateAll().then((result) => {
        // envia o resultado da validação para o componente pai
        this.$bus.$emit('validate-result', result)
      })
    })

    this.$bus.$on('showRegimeCasamento', (result) => {
      if (result === '1') {
        this.showRegimeCasamento = true
      } else {
        this.showRegimeCasamento = false
      }
    })
  },
  methods: {
    onChange: function (e) {
      this.dataNascimento = moment(e).format('L')
      this.$bus.$emit('nascimento', moment(e).format('DD/MM/YYYY'))
      this.showDatePicker = false
    },
    onChange2: function (e) {
      if (moment(e.target.value, 'DD/MM/YYYY').isValid()) {
        this.date = moment(e.target.value, 'DD/MM/YYYY').toDate()
        this.$bus.$emit('nascimento', e.target.value)
      }
    },
    onFocus: function () {
      this.showDatePicker = true
    },
    onBlur: function () {
      setTimeout(() => { this.showDatePicker = false }, 200)
    }
  },
  beforeDestroy () {
    this.$bus.$off()
  }
}
</script>
