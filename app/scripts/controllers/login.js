'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('mvpApp')
  .controller('LoginCtrl',['$scope', '$location', 'cfpLoadingBar','$timeout',function($scope, $location, cfpLoadingBar,$timeout){
		
		// $scope.fn_login = function () {		
		// 	cfpLoadingBar.start();
		// 	cfpLoadingBar.inc();
		// 	var userObj = {
		// 		'email' : $scope.email,
		// 		'password' : $scope.password
		// 	}    
		// 	dataService.loginCheck(userObj,function(d){
		// 		$timeout(function(){
		// 			console.debug(d)
		// 			cfpLoadingBar.complete();

		// 			if(d){
						
		// 				$location.path( "/dashboard" );	
		// 			}
		// 		},2000)
				
		// 	})
		  
		
		
	}])
