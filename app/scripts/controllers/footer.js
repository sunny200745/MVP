'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:Footer
 * @description
 * # Footer
 * Controller of the mvpApp
 */
angular.module('mvpApp')
  .controller('FooterCtrl',['$scope','$location', function ($scope, $location) {
    $scope.fn_OpenStats = function(){
    	$location.path( "/status" );	
    };
    $scope.fn_OpenDashboard = function(){
    	$location.path( "/dashboard" );	
    };
  }]);
