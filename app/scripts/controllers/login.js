'use strict';

/**
 * @ngdoc function
 * @name angularTrainingMvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTrainingMvpApp
 */
angular.module('mvpApp')
  .controller('LoginCtrl',['$scope', '$location', 'cfpLoadingBar','$timeout','data',function($scope, $location, cfpLoadingBar,$timeout, data){
		
		$scope.fn_login = function () {		
			cfpLoadingBar.start();
			cfpLoadingBar.inc();
			var userObj = {
				'email' : $scope.email,
				'password' : $scope.password
			}    
			data.loginCheck(userObj,function(d){
				$timeout(function(){
					console.debug(d)
					cfpLoadingBar.complete();

					if(d){
						
						$location.path( "/dashboard" );	
					}
				},2000)
				
			})
		}
		
		
	}])
