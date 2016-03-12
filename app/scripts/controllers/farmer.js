'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:FarmerCtrl
 * @description
 * # FarmerCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('FarmerCtrl', function ($scope, dataService) {

    $scope.rating = {};
    $scope.rating.rate = 3;
    $scope.rating.max = 5;


    $scope.farmerProducts = [
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
        },
        {
          image: 'http://lorempixel.com/600/800/',
          name:'First name 2'
        },
        {
          image: 'http://lorempixel.com/600/800/',
          name:'First name 2'
        },
        {
          image: 'http://lorempixel.com/600/800/',
          name:'First name 2'
        },
        {
          image: 'http://lorempixel.com/600/800/',
          name:'First name 2'
        },
        {
          image: 'http://lorempixel.com/600/800/',
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
