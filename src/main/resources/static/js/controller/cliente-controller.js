appCliente.controller("clienteController", function ($scope, $http) {

    $scope.clientes = [ ];
    $scope.cliente = { };
    var editar = false;
    carregarClientes = function () {
      $http({
        method: 'GET',
        url: 'http://localhost:8080/clientes'
      }).then(function successCallback(response) {
  
        $scope.clientes = response.data
        console.log(response.data)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
    carregarClientes();
    $scope.salvarCliente = function () {
      if(editar){
        $scope.editarClientex();
        return;
      }
      $http({
        method: 'POST',
        url: 'http://localhost:8080/clientes',
        data: $scope.cliente
      }).then(function successCallback(response) {
  
        $scope.clientes.push(response.data)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      $scope.cliente = {};
    };
  
    $scope.excluirCliente = function (cliente) {
      $http({
        url: "http://localhost:8080/clientes/cliente.id",
        method: "DELETE",
        data: '',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function successCallback(response) {
  
        for( var i = 0; i < $scope.clientes.length; i++){ 
          if ( $scope.clientes[i].id === cliente.id) {
            $scope.clientes.splice(i, 1); 
            break;
          }
        }
      }, function errorCallback(response) {
      });
    };
  
    $scope.editarCliente = function (cliente) {
      
      editar = true;
      $scope.cliente = angular.copy(cliente);
  
    }
    
    $scope.editarClientex = function(){
  
        $http({
        url: "http://localhost:8080/clientes/",
        method: "PUT",
        data: $scope.cliente,
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function successCallback(response) {
  
      for( var i = 0; i < $scope.clientes.length; i++){ 
  
        if($scope.clientes[i].id == $scope.cliente.id){
  
          $scope.clientes[i].nome = $scope.cliente.nome;
          $scope.cliente = {};
          break;
        }
      }
      editar = false;
      }, function errorCallback(response) {
      });
    }
  });
  