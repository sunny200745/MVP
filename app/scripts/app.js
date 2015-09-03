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
      .state('dashboard', {
        url: "/dashboard",
        data: {title: "Dashboard"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      .state('profileDetail', {
        url: "/profile/:profileID",
        data: {title: "Profile"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/userprofile.html', controller: 'UserprofileCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      .state('status', {
        url: "/status",
        data: {title: "Current Status"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/status.html', controller: 'DashboardCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      .state('canvas', {
        url: "/canvas",
        data: {title: "Canvas"},
        views: { 
          'header': { templateUrl: 'views/common/header.html', controller: 'HeaderCtrl' },
          'main': { templateUrl: 'views/canvas.html', controller: 'CanvasCtrl' },
          'footer': { templateUrl: 'views/common/footer.html', controller: 'FooterCtrl' }
        }
      })
      $urlRouterProvider.otherwise('/login');
      cfpLoadingBarProvider.includeSpinner = false;
      var login={'email':'sunny.200745@gmail.com','password':'1234'}
      localStorage.setItem('loginObject',JSON.stringify(login));
    
  }]).run(function ($state,$rootScope) {
    $rootScope.$state = $state;
  });
