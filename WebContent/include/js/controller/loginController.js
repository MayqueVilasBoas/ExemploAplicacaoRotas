var app = angular.module('login', []);

app.controller('loginController', ['$scope', '$http', function ($scope, $http) {
	       
		/* validar login */
        $scope.verificaUsuario = function (usuario) {
        	if (!usuario){
        		$scope.erro = "Informe o usuário!";	
        	} else if (!usuario.login) {
        		$scope.erro = "Informe o usuário!";
            } else if (!usuario.senha) {
            	$scope.erro = "Informe a senha!";
            } else {
            	$scope.erro = null;
            
            	location.href = "principal.html";           
            }
        };
    }]);


