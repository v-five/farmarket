'use strict';

/**
 * @ngdoc service
 * @name fermaApp.dataService
 * @description
 * # dataService
 * Service in the fermaApp.
 */
angular.module('fermaApp')
  .service('dataService', function ($http, $q) {

      // constructor
      var dataService = function(data) {
        angular.extend(this, data);
      };

      var urlBase = 'http://jsonplaceholder.typicode.com';

      dataService.urls = {
        login: 'do-login',

        register: 'do-register',

        products: 'get-products',

        farmer: function(id){
          return 'farmer' + '/' + id
        }
      };

      // static methods to retrieve items by id or entire list
      dataService.read = function(id) {
        return $http.get(urlBase + '/' + id).then(
            function(response) {
              // success
              return new dataService(response.data);
            },
            function(response) {
              // failure
              return $q.reject(response);
            }
        );
      };

      dataService.list = function(id) {
        return $http.get(urlBase + '/' + id).then(
            function(response) {
              // success
              var items = [];
              for(var i = 0; i < response.data.results.length; i++) {
                items.push(new dataService(response.data.results[i]));
              }
              return items;
            },
            function (response) {
              // failure
              return $q.reject(response);
            }
        );
      };

      // instance CRUD methods for dataService
      dataService.prototype.insert = function() {
        var item = this;
        return $http.post(urlBase, item).then(
            function(response) {
              // success
              item.objectId = response.data.objectId;
              return item;
            },
            function(response) {
              // failure
              return $q.reject(response);
            }
        );
      };

      dataService.prototype.update = function() {
        var item = this;
        return $http.put(urlBase + '/' + item.objectId, item).then(
            function(response) {
              // success
              return item;
            },
            function(response) {
              // failure
              return $q.reject(response);
            }
        );
      };

      dataService.prototype.remove = function() {
        var item = this;
        return $http.delete(urlBase + '/' + item.objectId).then(
            function(response) {
              // success
            },
            function(response) {
              // failure
              return $q.reject(response);
            }
        );
      };

      return dataService;
  });
