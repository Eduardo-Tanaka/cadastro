<template>
	<div>
		<label :for="idinput" :class="{'error': errors.has(name), 'valid': fields[name] && fields[name].valid}">{{label}}</label>
		<div class="input-group">
			<span class="input-group-addon" :id="idspan" :class="{'input': true, 'is-danger error': errors.has(name), 'is-valid valid': fields[name] && fields[name].valid}">
        <i class="fa" :class="icon" aria-hidden="true"></i>
      </span>
			<div class="control has-icon has-icon-right">
				<input :name="name" type="text" class="form-control" :placeholder="placeholder" :aria-describedby="idspan" :id="idinput" :type="type"
					:class="{'input': true, 'is-danger': errors.has(name), 'is-valid': fields[name] && fields[name].valid}" 
          v-validate="validate" v-mask="mask" @input="onChange" v-model="data" :data-vv-name="name" :data-vv-as="alias">
				<i v-show="errors.has(name)" class="fa fa-times"></i>
        <i v-show="fields[name] && fields[name].valid" class="fa fa-check"></i>
			</div>
		</div>
		<span v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</span>
	</div>
</template>

<script>
  export default {
    inject: ['$validator'],
    name: 'InputWithIcon',
    data () {
      return {
        data: ''
      }
    },
    props: {
      label: {
        type: String,
        required: true
      },
      idspan: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      idinput: {
        type: String,
        required: true
      },
      validate: {
        type: String,
        required: true
      },
      mask: {
        type: String,
        default: ''
      },
      alias: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      // emite o evento para ser pego no componente pai
      onChange: function (e) {
        this.$bus.$emit(e.target.name, e.target.value)
      }
    }
  }
</script>
