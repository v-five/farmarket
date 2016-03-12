'use strict';

/**
 * @ngdoc function
 * @name fermaApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the fermaApp
 */
angular.module('fermaApp')
  .controller('ProductsCtrl', function ($scope, dataService,utils) {
    $scope.searchTerm ='';
    $scope.filters = [];
    $scope.tempProducts = [];
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

    $scope.tempProducts = utils.cloneArray($scope.productItems);


    var applyFiltering = function(){
      var cats = $scope.filters;
      var _filterSource = utils.cloneArray($scope.tempProducts);
      if(cats.length===0){
        utils.copyArray($scope.productItems,$scope.tempProducts);
        return;
      }

      utils.emptyArray($scope.productItems);
      angular.forEach(_filterSource,function(item,key){
        if(cats.indexOf(item.category)>=0){
          $scope.productItems.push(item);
        }
      });
    }

    var applySearch = function(){
      if($scope.searchTerm.length<=0){
        return;
      }
      var _searchSource = utils.cloneArray($scope.productItems);
      utils.emptyArray($scope.productItems);
      angular.forEach(_searchSource,function(item,key){
        if(item.name.toLowerCase().indexOf($scope.searchTerm)>=0){
          $scope.productItems.push(item);
        }
      });
    }

    $scope.addFilter = function(category){
      var cats = $scope.filters;
      var pos = cats.indexOf(category);
      if(pos>=0)
        cats.splice(pos,1);
      else
        cats.push(category);
      $scope.searchTerm='';
      applyFiltering();

    };

    $scope.search = function(){
      applyFiltering();
      applySearch();
    }



    $scope.isActive = function(filter){
      return $scope.filters.indexOf(filter)>=0;
    }

  });
