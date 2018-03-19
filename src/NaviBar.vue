<template>
  <header class="main-header" v-if="isLogged">
    <nav class="navbar navbar-default">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle visibility-xs sair" role="button" onclick="sair()">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" style="font-size:16px;">
          <i class="fa fa-home"></i>
        </button>
        <button type="button" class="navbar-toggle collapsed" data-toggle="push-menu">
          <i class="fa fa-exchange"></i>
        </button>
        <!-- Logo -->
        <a href="#" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>S</b><span>HB</span></span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>SI</b><span>HAB</span> 3</span>
        </a>
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle hidden-xs" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown user user-menu hidden-xs">
            <a aria-expanded="false" href="#" class="dropdown-toggle" data-toggle="dropdown">              
              <img src="" class="user-image foto-func-menu" alt="Foto">             
                <span id="menu-matricula" class="hidden-xs">C</span>
              </a>

              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="" class="user-image foto-func-menu" alt="Foto">
                  <p id="menu-nome-usuario">              
                    <small id="small-menu-matricula">C></small>
                  </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <button type="button" data-toggle="modal" data-target="#modalSenha" class="btn btn-default btn-flat">Trocar Senha</button>
                  </div>
                  <div class="pull-right">
                    <a href="../adm/atualizar_funcionario.html" class="btn btn-default btn-flat">Atualizar Dados</a>
                  </div>
                </li>
              </ul>
          </li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Conformidade PF <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><del>ORIGINAR</del></a></li>
              <li><a href="#"><del>RECUPERAR</del></a></li>
              <li><a href="#"><del>FINALIZAR</del></a></li>
              <li><a href="#"><del>ROOT - Voltar Proposta</del></a></li>
              <li><a href="#"><del>Relatórios</del></a></li>
              <li><a href="../painel/painel.html">Painel</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Conformidade PJ <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><del>Controle de Recebiveis</del></a></li>
              <li><a href="#"><del>Vila dos Atletas</del></a></li>
              <li><a href="#"><del>Relatórios</del></a></li>
              <li><a href="#">Painel</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Atendimento <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><del>Cadastro de Demanda</del></a></li>
              <li><a href="#"><del>Servicos.CAIXA</del></a></li>
              <li><a href="#"><del>Relatórios</del></a></li>
              <li><a href="#"><del>Painel</del></a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ZEROP <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><del>Exclusao de Contratos</del></a></li>
              <li><a href="#"><del>Desenquadramento</del></a></li>
              <li><a href="#"><del>Relatórios</del></a></li>
              <li><a href="#"><del>Painel</del></a></li>
            </ul>
          </li>
           <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastro <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#"><del>Cadastrar Proposta Manualmente</del></a></li>
              <li><a href="#"><del>Retorno sem Capeante</del></a></li>
              <li><a href="#"><del>CCA</del></a></li>
              <li><a href="#"><del>Conglomerados</del></a></li>
              <li><a href="#"><del>Empreendimentos</del></a></li>
              <li><a href="#"><del>Construtoras</del></a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Adm <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="../adm/ferias.html">Férias</a></li>
              <li><a href="../adm/lista_funcionarios.html">Atualizar Células</a></li>
              <li><a href="../adm/cadastro.html">Cadastrar Empregados</a></li>
            </ul>
          </li>
          <li>
            <a href="#" onclick="sair()" class="hidden-xs sair">Sair</a>
          </li>
           <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </header>
  <header class="main-header" id="main-header" v-else>
    <nav class="navbar navbar-default">
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">
              <!-- logo for regular state and mobile devices -->
              <span class="logo-lg"><b>SI</b><span>HAB</span> 3</span>
            </router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/">Login</router-link>
          </li>
          <li>
            <router-link to='/home/cadastro'>Cadastrar</router-link>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'va-navibar',
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  }
}
</script>
