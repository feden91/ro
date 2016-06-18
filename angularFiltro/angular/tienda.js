var tienda = angular.module("tienda", []);

tienda.controller("MainController", function($scope, datos){

	$scope.tiendaTitle = "Tienda";
	$scope.equipoTitle = "Equipo";
	$scope.fil=[];
	$scope.items = [];
	
	datos.traerTodos().then(function(data){
		$scope.items = data.data;
	})
	
	$scope.filtroPais = function(){
		return fil.pais = item || '';
	};

});

tienda.service('datos', function($http){
	this.traerTodos = function () {
		return $http.get('100Datos.json');
	}
});

tienda.filter('range', function(){
	return function (item, campo, min, max){
	// FALTA VALIDAR QUE EL CAMPO EXISTA
		min = min || 0;
		max = max || Infinity;
		var lista = [];

		for (var j in item[0]){
			
			if (j == campo){
				//console.log(item[0][j])
				item.forEach(function (user){		
					console.log(user[j])
					if (parseInt(user[j]) > min && parseInt(user[j]) < max )		
						lista.push(user);
				})
			break;
			}
		}
	
	return lista;
	}
})

tienda.filter('range1', function(){
	return function (item, min, max){

		min = min || 0;
		max = max || Infinity;
		var lista = [];
		
		item.forEach(function (user){		
			if (user.Sueldo_pretendido > min && user.Sueldo_pretendido < max )		
				lista.push(user);
		})

		return lista;
	}
})