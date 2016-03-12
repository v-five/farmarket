'use strict';

/**
 * @ngdoc overview
 * @name fermaApp
 * @description
 * # fermaApp
 *
 * Main module of the application.
 */
angular
  .module('fermaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/produse', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .when('/produse/:slug', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/fermier/produse', {
        templateUrl: 'views/farmer-products.html',
        controller: 'FarmerProductsCtrl',
        controllerAs: 'farmer-products'
      })
      .when('/fermier/:slug', {
        templateUrl: 'views/farmer.html',
        controller: 'FarmerCtrl',
        controllerAs: 'farmer'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/register', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'register'
      })
      .when('/adauga-produs', {
        templateUrl: 'views/add-product.html',
        controller: 'AddProductCtrl',
        controllerAs: 'add-product'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
