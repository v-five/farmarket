'use strict';

/**
 * @ngdoc directive
 * @name fermaApp.directive:dropzone
 * @description
 * # dropzone
 */
angular.module('fermaApp')
  .directive('dropzone', function () {
      return function(scope, element, attrs) {

          element.dropzone({
              url: "/upload",
              maxFilesize: 2,
              autoProcessQueue: false,
              maxFiles:3,
              addRemoveLinks: true,
              paramName: "uploadfile",
              init: function() {

                  this.on('success', function(file, json) {

                  });

                  this.on('addedfile', function(file) {
                      scope.$apply(function(){

                      });
                  });

                  this.on('drop', function(file) {

                  });

              }

          });

      }
  });
