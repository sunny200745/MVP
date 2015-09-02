'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the mvpApp
 */
angular.module('mvpApp')
  .controller('DashboardCtrl',['$scope', 'data', '$location', function ($scope, data, $location) {
   	
   	$scope.users = data.getUserData();
   	console.debug($scope.users)


   	$scope.fn_profileSearch = function(){
   		if(!$scope.searchContent){
   			return false;
   		}else{
   			
   			var empId, searchContent = $scope.searchContent;				
   			angular.forEach($scope.users,function(val, index){
   				if(searchContent.NAME == val.NAME){
   					empId = val.ID;
   					data.setSearchedData(val);
   					return false
   				}
   			});		
   			if(!data.getSearchedData()){
   				alert("No Data Matched")
   				return false;
   			}
   			$location.path( "/profile/"+empId );
   		}

   		
   	};
  }]);