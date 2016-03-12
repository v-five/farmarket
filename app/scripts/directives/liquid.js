'use strict';

/**
 * @ngdoc directive
 * @name fermaApp.directive:liquid
 * @description
 * # liquid
 */
angular.module('fermaApp')
  .directive('liquid', function ($timeout) {
      return {
          restrict: 'A',
          link: function (scope, element, attr) {
              $timeout(function () {
                  element.imgLiquid({fill: true, horizontalAlign: "center", verticalAlign: "center"});
              });
          }
      }
  });
