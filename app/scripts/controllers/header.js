'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:Header
 * @description
 * # Header
 * Controller of the mvpApp
 */
angular.module('mvpApp')
  .controller('HeaderCtrl',['$scope', '$location', '$stateParams', '$rootScope',function($scope, $location, $stateParams, $rootScope){
    	if(angular.isDefined($stateParams.for)){
    		$scope.applyFor = $stateParams.for.toUpperCase();
    		// Apply a better way to implement this
    		$rootScope.applyForHeading = $scope.applyFor;
    	}
    	
    	$scope.logout = function () {				
            $location.path( "/login" );
    	};
    	$scope.doBack = function(){
    		$window.history.back();
    	}
  }]);
