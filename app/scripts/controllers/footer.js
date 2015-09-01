'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:Footer
 * @description
 * # Footer
 * Controller of the mvpApp
 */
angular.module('mvpApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.fn_OpenStats = function(){
    	$location.path( "/status" );	
    };
    $scope.fn_OpenDashboard = function(){
    	$location.path( "/dashboard" );	
    };
  });
