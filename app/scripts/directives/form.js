'use strict';

/**
 * @ngdoc directive
 * @name yoAppApp.directive:form
 * @description
 * # form
 */
angular.module('yoAppApp')
    .directive('builder', function($compile) {
        return {
            link: function(scope, elm, attrs) {

                var fields = JSON.parse(attrs.fields);

                fields.forEach(function(field) {
                    cookElement(field.label, field.type);
                });

                function cookElement(label, type) {
                    var elements = [];
                    elements.push(createElement("<label class= 'label-name'>" + label + "</label>"))
                    switch (type) {
                        case 'text':
                            elements.push(createElement("<input type='text' placeholder= 'Enter Name' class= 'form-control' maxlength= '50' />"));
                            break;
                        case 'email':
                            elements.push(createElement("<input type='email' placeholder= 'Enter Email' class= 'form-control'  maxlength= '50' required/>"));
                            break;
                        case 'password':
                            elements.push(createElement("<input type='password' placeholder= 'Enter Password' class= 'form-control' maxlength= '8' required />"));
                            break;
                        case 'date':
                            elements.push(createElement("<input type='date' class= 'form-control' required />"));
                            break;
                        case 'textarea':
                            elements.push(createElement("<textarea class= 'form-control' maxlength= '500' placeholder= 'Description'>"));
                            break;
                        case 'number':
                            elements.push(createElement("<input type='number' placeholder= 'Enter Age' class= 'form-control' min='18' max='99' value='21' />"));
                            break;
                        case 'select':
                            elements.push(createElement("<select class= 'form-control' required><option selected disabled>Choose option</option><option>Male</option><option>Female</option></select>"));
                            break;
                    }

                    elements.forEach(function(element) {
                        elm.append(
                            element
                        );
                    });

                }

                function createElement(html) {
                    return angular.element($compile(html)(scope));
                }
            }
        };
    });