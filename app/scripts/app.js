'use strict';

/**
 * @ngdoc overview
 * @name yoAppApp
 * @description
 * # yoAppApp
 *
 * Main module of the application.
 */
angular
  .module('yoAppApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/fields');

    $stateProvider
      .state('fields', {
        url: '/fields',
        templateUrl: 'views/fields-forms.html',
        controller: 'FieldsFormsCtrl'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
  });
