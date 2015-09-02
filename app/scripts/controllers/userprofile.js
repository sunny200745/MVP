'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:UserprofileCtrl
 * @description
 * # UserprofileCtrl
 * Controller of the mvpApp
 */
angular.module('mvpApp')
  .controller('UserprofileCtrl', ['$scope', 'data', function ($scope, data) {
    $scope.data = data.getSearchedData();
  }]);
