'use strict';

/**
 * @ngdoc directive
 * @name mvpApp.directive:backbutton
 * @description
 * # backbutton
 */
angular.module('mvpApp')
  .directive('backButton',['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
  }]);

