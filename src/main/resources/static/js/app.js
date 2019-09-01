//Criação do módulo principal da aplicação
var appCliente = angular.module("appCliente", ['ngRoute']);

appCliente.config(function ($routeProvider) { 
	 $routeProvider
	.when("/", { 
	templateUrl: '/views/cliente.html', 
	controller: 'clienteController' })
	// .when("/cidade", { templateUrl: 'views/cidade.html', controller: 'cidadeController' })
	// .when("/estado", { templateUrl: 'views/estado.html', controller: 'estadoController' })
	 .otherwise({redirectTo:'/'});
});

