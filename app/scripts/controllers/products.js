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
        category:'branza',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '3'
        }
      },
      {
        image: 'http://lorempixel.com/300/400/',
        name:'First name 2',
        category:'branza',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '3'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'branza',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '4'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'lapte',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '3'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'lapte',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '2'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '3'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '3'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'animale',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '5'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '4'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '2'
        }
      },
      {
        image: 'http://lorempixel.com/600/800/',
        name:'First name 2',
        category:'carne',
        owner:{
          id: 2,
          name: 'John de john',
          rating: '1'
        }
      }
    ];


    $scope.setFilter = function(category){

    }



  });
