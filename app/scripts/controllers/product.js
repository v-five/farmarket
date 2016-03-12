'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('ProductCtrl', function ($scope, dataService) {

    $scope.productImages = [
        'http://lorempixel.com/600/800', 'http://lorempixel.com/600/800'
    ]

  });
