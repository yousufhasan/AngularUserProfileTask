'use strict';
angular.module('userProfileApp.services', [])
    .factory('userProfileFactory', ['$resource', 'serviceURL', function($resource, serviceURL) {
        var userFac = {};
        userFac.getProfiles = function() {
            return $resource(serviceURL + ":id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };
        return userFac;
    }]);