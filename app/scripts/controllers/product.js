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

      $scope.similarProducts = [
          {
              image: 'http://lorempixel.com/700/400/',
              name:'First name'
          },
          {
              image: 'http://lorempixel.com/300/400/',
              name:'First name 2'
          },
          {
              image: 'http://lorempixel.com/600/800/',
              name:'First name 2'
          },
          {
              image: 'http://lorempixel.com/600/800/',
              name:'First name 2'
          }
      ];

  });
