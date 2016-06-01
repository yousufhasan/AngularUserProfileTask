'use strict';
angular.module('userProfileApp.controllers', [])
    .controller('userProfileCtrl', ['$filter', 'userProfileFactory', function($filter, userProfileFactory) {
        var self = this;
        self.showMenu = true;
        self.showLoader = true;
        self.userProfiles = [];
        self.selectedProfile = "";
        /* get all users from service*/
        var showAllUsers = function() {
            userProfileFactory.getProfiles().query(
                function(response) { //success
                    self.userProfiles = response;
                    self.selectedProfile = $filter('filter')(self.userProfiles, {
                        id: 1
                    })[0];
                    self.showLoader = false;
                },
                function(response) { //failure
                    console.log("Error: " + response.status + " " + response.statusText);
                }
            );
        };
        this.showFilters = function() {
            self.showMenu ? self.showMenu = false : self.showMenu = true;
        }
        this.showDetails = function(id) { // on click show details
            self.selectedProfile = $filter('filter')(self.userProfiles, {
                id: id
            })[0];
        };

        showAllUsers();

    }]);