'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('ProductsCtrl', function ($scope, dataService, $filter) {

    $scope.categories = [
      {
        id:1,
        name: 'branza'
      },
      {
        id:2,
        name: 'lapte'
      },
      {
        id:3,
        name: 'animale'
      },
      {
        id:4,
        name: 'carne'
      }
    ];

    $scope.productItems = [
      {
        image: 'http://lorempixel.com/700/400/',
        name:'First name',
        category:'branza'
      },
      {
        image: 'http://lorempixel.com/300/400/',
        name:'First name 2',
        category:'branza'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'branza'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'lapte'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'lapte'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne'
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne'
      }
    ];


    $scope.setFilter = function(category){

    }



  });
