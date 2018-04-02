<template>
	<div>
		<label 
      :for="idinput" 
      :class="{'error': errors.has(name), 'valid': fields[name] && fields[name].valid}">
        {{label}}
    </label>
		<div class="input-group">
			<span 
        class="input-group-addon" 
        :id="idspan" 
        :class="{'input': true, 'is-danger error': errors.has(name), 'is-valid valid': fields[name] && fields[name].valid}">
        <i class="fa" :class="icon" aria-hidden="true"></i>
      </span>
			<div class="control has-icon has-icon-right">
        <select 
          :name="name" 
          class="form-control" 
          :aria-describedby="idspan" 
          :id="idinput" v-validate="validate" 
          :data-vv-name="name" 
          :data-vv-as="alias"
          :class="{'input': true, 'is-danger': errors.has(name), 'is-valid': fields[name] && fields[name].valid}" 
          @change="onChange" 
          v-model="data">
          <option value="">Selecione</option>
          <option v-for="(item, index) in options" :key="item.codigo" :value="item.codigo">{{item.desc}}</option>
        </select>
			</div>
		</div>
		<span v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</span>
	</div>
</template>
        
<script>
  export default {
    inject: ['$validator'],
    name: 'SelectWithIcon',
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
      idinput: {
        type: String,
        required: true
      },
      validate: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      alias: {
        type: String,
        default: ''
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
