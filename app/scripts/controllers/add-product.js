'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:AddProductCtrl
 * @description
 * # AddProductCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('AddProductCtrl', function ($scope, dataService) {

      $scope.tags = [];

      $scope.files = {};

      $scope.loadTags = function(query) {
        return [
          {text: 'text1'},
          {text: 'text2'},
          {text: 'text3'}
        ];
      };



  });
