'use strict';

/**
 * @ngdoc overview
 * @name mvpApp
 * @description
 * # mvpApp
 *
 * Main module of the application.
 */
angular
  .module('mvpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chieffancypants.loadingBar',
    'ui.router',
    'ui.bootstrap'
  ])

  .config(["$stateProvider","$urlRouterProvider","cfpLoadingBarProvider",function ($stateProvider,$urlRouterProvider,cfpLoadingBarProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        data: {title: "Login"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/login.html', controller: 'LoginCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      $urlRouterProvider.otherwise('/login');
      cfpLoadingBarProvider.includeSpinner = false;

  }]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
  });
