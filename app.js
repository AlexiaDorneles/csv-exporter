/**
 * @author Aléxia Dorneles <alexiadorneles02@gmail.com>
 */
const myApp = angular.module('app', ['ngSanitize', 'ngCsv'])

myApp.controller('GeneralController', ['$scope', function($scope) {

  const getArray = () => [ $scope.grafo ]
  const getHeader = () => ['Field A', 'Field B', 'Field C']

  $scope.getArray = getArray
  $scope.getHeader = getHeader

  // source used:
  // https://github.com/asafdav/ng-csv

  // another alternative:
  // https://www.youtube.com/watch?v=41rOAt-zCu4
}])
