'use strict';

/**
 * @ngdoc function
 * @name yoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAppApp
 */
angular.module('yoAppApp')
    .controller('FieldsFormsCtrl', function($scope, Storage) {

        $scope.fields = [{
            id: 1,
            label: 'Input Text',
            type: 'text'
        }, {
            id: 2,
            label: 'Input Email',
            type: 'email'
        }, {
            id: 3,
            label: 'Input Password',
            type: 'password'
        }, {
            id: 4,
            label: 'Input Date',
            type: 'date'
        }, {
            id: 5,
            label: 'Textarea',
            type: 'textarea'
        }, {
            id: 6,
            label: 'Input Age',
            type: 'number'
        }, {
            id: 7,
            label: 'Gender',
            type: 'select'
        }]


        $scope.meta = {
            fields: []
        };

        try {
            var data = JSON.parse(Storage.getData());
            $scope.fields.forEach(function(item) {
                data.forEach(function(d) {
                    if(d.id === item.id) {
                        item[item.label] = true;
                        $scope.meta.fields.push(item);
                    }
                })
            });
        }catch(ex) {

        }

        $scope.check = function(data, index) {
            var found = false;
            $scope.meta.fields.forEach(function(item, index) {
                if(item.id === data.id) {
                    $scope.meta.fields.splice(index, 1);
                    found = true;
                }
            });
            if(!found) {
                $scope.meta.fields.push(data);
            }
            Storage.setData(JSON.stringify($scope.meta.fields));
        };
    });