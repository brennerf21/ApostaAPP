angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home.inicio', {
    url: '/inicio',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('home.configuraEs', {
    url: '/configuracoes',
    views: {
      'tab2': {
        templateUrl: 'templates/configuraEs.html',
        controller: 'configuraEsCtrl'
      }
    }
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home.alterarSenha', {
    url: '/alterarsenha',
    views: {
      'tab2': {
        templateUrl: 'templates/alterarSenha.html',
        controller: 'alterarSenhaCtrl'
      }
    }
  })

  .state('home.jogos', {
    url: '/jogar',
    views: {
      'tab1': {
        templateUrl: 'templates/jogos.html',
        controller: 'jogosCtrl'
      }
    }
  })

  .state('home.resultado', {
    url: '/resultado',
    views: {
      'tab1': {
        templateUrl: 'templates/resultado.html',
        controller: 'resultadoCtrl'
      }
    }
  })

  .state('home.relatRios', {
    url: '/relatorios',
    views: {
      'tab1': {
        templateUrl: 'templates/relatRios.html',
        controller: 'relatRiosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});