'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('MainCtrl', function ($scope, dataService) {

      $scope.homeItems = [
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
