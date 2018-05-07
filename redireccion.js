angular.module('facturaElectronica',['ngRoute'])
	.config(function($routeProvider) {
    $routeProvider
   		.when('/home',{
				templateUrl:'home.html',
				controller: 'home'
			})
     	.when('/usuariosBuscar',{
  				templateUrl:'configuracion/usuariosBuscar.html',
  				controller: 'usuariosBuscar'
  		})
			.otherwise('/home',{
				templateUrl:'home.html'
			});
});
