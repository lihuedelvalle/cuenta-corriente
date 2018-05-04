var app = angular.module("facturaElectronica", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl : "home.html",
      controller: "londonCtrl"
    })
  		.when('/home',{
        templateUrl : "home.html",
        controller: "londonCtrl"
			})
  		.otherwise('/home',{
  				templateUrl:'home.html'
  			});
});
