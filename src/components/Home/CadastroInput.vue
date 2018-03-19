<template>
	<div>
		<label for="nome-wizard">{{label}}</label>
		<div class="input-group">
			<span class="input-group-addon" :id="idspan"><i class="fa" :class="icon" aria-hidden="true"></i></span>
			<div class="control has-icon has-icon-right">
				<input :name="name" type="text" class="form-control" :placeholder="placeholder" :aria-describedby="idspan" :id="idinput"
					:class="{'input': true, 'is-danger': errors.has(name) }" v-validate="validate" v-mask="mask">
				<i v-show="errors.has(name)" class="fa fa-times"></i>
			</div>
		</div>
		<span v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</span>
	</div>
</template>

<script>
  export default {
    name: 'CadastroInput',
    props: {
      label: {
        type: String
      },
      idspan: {
        type: String
      },
      icon: {
        type: String
      },
      name: {
        type: String
      },
      placeholder: {
        type: String
      },
      idinput: {
        type: String
      },
      validate: {
        type: String
      },
      mask: {
        type: String
      }
    }
  }
</script>
