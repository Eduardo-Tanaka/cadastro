import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('components/Home/Login.vue')
const Home = () => import('components/Home/Home.vue')
const HomeCadastro = () => import('components/Home/Cadastro.vue')
const HomeAtualizaCadastro = () => import('components/Home/AtualizaCadastro.vue')
// import { validaRota } from '../server-api/home/autorizacao'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/adm',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/home/cadastro',
      name: 'HomeCadastro',
      component: HomeCadastro
    },
    {
      path: '/home/atualiza',
      name: 'HomeAtualizaCadastro',
      component: HomeAtualizaCadastro
    }
  ],
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // tentar acessar uma rota protegida sem estar logado
  if (to.matched.some(record => record.meta.requiresAuth) && localStorage.getItem('isLogged') !== 'true') {
    // redireciona para o login, e guarda a página para qual voltar
    next({ path: '/', query: { redirect: to.fullPath } })
  // tentar acessar uma rota protegida logado, valida se tem acesso para acessar a página
  } else if (to.matched.some(record => record.meta.requiresAuth) && localStorage.getItem('isLogged') === 'true') {
    next()
    /* validaRota()
      .then(() => { next() })
      .catch(() => next({ path: '/', query: { redirect: to.fullPath } })) */
  // tentar acessar a página de login já logado, volta para a página de origem
  } else if (localStorage.getItem('isLogged') === 'true' && to.path === '/') {
    next('/adm')
  } else {
    next() // make sure to always call next()!
  }
})

export default router
