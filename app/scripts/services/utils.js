'use strict';

/**
 * @ngdoc service
 * @name fermaApp.utils
 * @description
 * # utils
 * Service in the fermaApp.
 */
angular.module('fermaApp')
  .service('utils', function () {
    var _this = this;
    this.emptyArray = function(_array){
      while(_array.length>0){
        _array.splice(0,1);
      }
    }

    this.cloneArray = function(_source){
      var newArr = [];
      angular.forEach(_source,function(item,key){
        newArr.push(angular.extend({},item,true));
      });

      return newArr;
    }

    this.copyArray = function(_dest,_source){
      _this.emptyArray(_dest);
      angular.forEach(_source,function(item,key){
        _dest.push(angular.extend({},item,true));
      });
    }



  });
