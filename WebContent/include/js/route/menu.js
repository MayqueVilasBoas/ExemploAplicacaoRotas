var app = angular.module('menu', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/tela1', {
                templateUrl: 'tela1.html',
                controller: 'tela1'
            })
            .when('/tela2', {
                templateUrl: 'tela2.html',
                controller: 'tela2'
            })
            .when('/tela3', {
                templateUrl: 'tela3.html',
                controller: 'tela3'
            })
            .otherwise({
                redirectTo: 'index.html'
            });
});