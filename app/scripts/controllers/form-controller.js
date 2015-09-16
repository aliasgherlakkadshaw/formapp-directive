'use strict';

/**
 * @ngdoc function
 * @name yoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAppApp
 */
angular.module('yoAppApp')
    .controller('FormCtrl', function($scope, Storage) {
        var data = Storage.getData();
        $scope.displayData = JSON.parse(data);
    })