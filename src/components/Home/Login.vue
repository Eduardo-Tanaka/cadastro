<template>
	<div class='container'>
	  <div class='row'>
	  	<div class='text-center'>
        <transition name="slideRight" v-on:after-enter="animationEnd">
          <h1 id='sihab' style="font -size:70px;font-family:'Hanzel Extended Normal';color:#044368" class='logo-lg' v-show="animate">
            SI<span style="color:orange">HAB</span> 3
            <small id='sihab-desc' v-show="animate" style="margin-left:50px;font-size:19px;font-family:'Hanzel Extended Normal';color:#044368b3" :style={opacity:opacity}>Sistema de Habitação</small>
          </h1>
        </transition>
	  	</div>
      <transition name="slideDown">	
  	  	<div class='main-login' v-if="animate">		
  	  		<div class='login-box'>
  	  			<div class='text-center'>
  	  				<h3 class='login-bg'>Login</h3>
  	  			</div>
  	  			<div class='login-form'>
  	  				<form id='form-login' action='../../api/public/Login' method='post' @submit.prevent="login">
  	  					<div class='form-group'>
                  <input-with-icon
                    label="USUÁRIO" 
                    idspan="basic-addon-login-usuario" 
                    icon="fa-user" 
                    name="usuario"
                    placeholder="Matrícula (somente números)" 
                    idinput="login-usuario" 
                    validate="required|max:6"
                    mask="999999"></input-with-icon>
  						  </div>
    						<div class='form-group'>
                  <input-with-icon
                    label="SENHA" 
                    idspan="basic-addon-login-senha" 
                    icon="fa-lock" 
                    name="senha"
                    placeholder="Digite sua senha" 
                    idinput="senha-usuario" 
                    validate="required|min:6|max:32"
                    type="password"></input-with-icon>
    						</div>
    						<div class='form-group pull-right'>
    							<button v-ripple id='btn-submit' type='submit' class='btn btn-primary' style='width:100px' :disabled="isFetching">
                    Enviar <i class="fa fa-spinner fa-spin fa-fw" v-if="isFetching"></i>
                  </button>
    						</div>
    						<div>
    							<a style='cursor:pointer;'>Esqueci minha senha</a>
    							<div style='margin-top:10px'>
                    <router-link to='/home/cadastro'>
    								  Cadastrar
                    </router-link>
    							</div>
    						</div>
  			  		</form>
  	  			</div>
  		  	</div>
  	  	</div>
      </transition>
		</div>
		<footer class='main-footer' id='main-footer' style='margin-top:30px;'>
			<div class='pull-right hidden-xs'>
		  	<b>Versão</b> 3.0
			</div>
			<strong>CEHOP / CAIXA </strong> © 2018 <i>Todos os direitos reservados</i>.
	  </footer>
	</div><!-- container -->
</template>

<script>
import InputWithIcon from '../Inputs/InputWithIcon'
// import { fetchLogin } from '../../server-api/home/login'
function verificaNavegador () {
  var nav = navigator.userAgent.toLowerCase()
  if (nav.indexOf('msie') !== -1) {
    $('input').prop('disabled', true)
    $('button').prop('disabled', true)
    $('a').on('click', function (e) {
      e.preventDefault()
    })
    alert('Este site não suporta o navegador Internet Explorer! Por favor utilize outro navegador')
  } else if (nav.indexOf('opera') !== -1) {
  } else if (nav.indexOf('mozilla') !== -1) {
    if (nav.indexOf('firefox') !== -1) {
      if (parseInt(nav.split('firefox/')[1]) < 52) {
        $('input').prop('disabled', true)
        $('button').prop('disabled', true)
        $('a').on('click', function (e) {
          e.preventDefault()
        })
        alert('Atualize seu navegador Mozilla/Firefox para pelo menos a versão 52')
      }
    } else if (nav.indexOf('chrome') !== -1) {
    }
  } else {
    console.log('Navegador desconhecido!')
  }
}

export default {
  name: 'Login',
  components: {
    'input-with-icon': InputWithIcon
  },
  created () {
  },
  data () {
    return {
      usuario: '',
      senha: '',
      animate: false,
      opacity: 0,
      isFetching: false
    }
  },
  mounted () {
    this.$bus.$on('usuario', (value) => { this.usuario = value })
    this.animate = true
    verificaNavegador()
  },
  methods: {
    login: function (event) {
      this.isFetching = true
      this.$validator.validateAll().then((result) => {
        // localStorage.setItem('isLogged', JSON.stringify(true))
        /* if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
        } else {
          this.$router.replace('/adm')
        } */
        /* if (result) {
          fetchLogin()
            .then((data) => {
              console.log(data)
              localStorage.removeItem('jwt') // Remove qualquer token existente!
              localStorage.removeItem('matricula')
              localStorage.removeItem('nome')
              localStorage.removeItem('foto')
              localStorage.setItem('isLogged', true)
              localStorage.setItem('jwt', data.jwt)
              this.$router.replace('/adm') // redireciona para a página inicial
            })
            .catch(error => {
              console.log(error)
            })

            // return
        }

        this.isFetching = false
        this.$toasted.error('Usuário ou Senha Inválidos!!!', { icon: 'times' }) */
      })
    },
    animationEnd: function () {
      this.opacity = 1
    }
  },
  beforeDestroy () {
    this.$bus.$off()
  }
}
</script>
