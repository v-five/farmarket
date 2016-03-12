'use strict';

/**
 * @ngdoc directive
 * @name fermaApp.directive:starRating
 * @description
 * # starRating
 */
angular.module('fermaApp')
  .directive('starRating', function () {
      return {
          scope: {
              rating: '=',
              maxRating: '@',
              readOnly: '@',
              click: "&",
              mouseHover: "&",
              mouseLeave: "&"
          },
          restrict: 'EA',
          template:
              "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                      <i ng-mouseleave='isolatedMouseLeave($index + 1)' ng-Click='isolatedClick($index + 1)' ng-mouseenter='isolatedMouseHover($index + 1)' class='material-icons'>{{((hoverValue + _rating) <= $index) && \"star_border\" || \"star\"}}</i>'\
                      </i> \
              </div>",
          compile: function (element, attrs) {
              if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                  attrs.maxRating = '5';
              };
          },
          controller: function ($scope, $element, $attrs) {
              $scope.maxRatings = [];

              for (var i = 1; i <= $scope.maxRating; i++) {
                  $scope.maxRatings.push({});
              };

              $scope._rating = $scope.rating;

              $scope.isolatedClick = function (param) {
                  if ($scope.readOnly == 'true') return;

                  $scope.rating = $scope._rating = param;
                  $scope.hoverValue = 0;
                  $scope.click({
                      param: param
                  });
              };

              $scope.isolatedMouseHover = function (param) {
                  if ($scope.readOnly == 'true') return;

                  $scope._rating = 0;
                  $scope.hoverValue = param;
                  $scope.mouseHover({
                      param: param
                  });
              };

              $scope.isolatedMouseLeave = function (param) {
                  if ($scope.readOnly == 'true') return;

                  $scope._rating = $scope.rating;
                  $scope.hoverValue = 0;
                  $scope.mouseLeave({
                      param: param
                  });
              };
          }
      };
  });
