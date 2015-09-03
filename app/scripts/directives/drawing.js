'use strict';

/**
 * @ngdoc directive
 * @name mvpApp.directive:drawing
 * @description
 * # drawing
 */
angular.module('mvpApp')
  .directive('drawing', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the drawing directive');
      }
    };
  });
