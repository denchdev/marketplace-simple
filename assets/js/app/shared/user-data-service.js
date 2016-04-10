(function() {
    'use strict';

    angular.module('Marketplace')
        .factory('userDataService', userDataService);

    function userDataService() {
        var factory = {
            setToken: setToken,
            setUser: setUser,
            setInvitationId: setInvitationId,
            setCurrentRegion: setCurrentRegion,
            setRegions: setRegions,
            getToken: getToken,
            getUser: getUser,
            getCurrentRegion: getCurrentRegion,
            getRegions: getRegions,
            getInvitationId: getInvitationId,
            isSameUser: isSameUser,
            clear: clear
        };

        return factory;

        function setToken(value) {
            localStorage.token = value;
        }

        function setUser(value) {
            localStorage.user = JSON.stringify(value);
        }

        function setInvitationId(id) {
            localStorage.setItem('invitationId', id);
        }

        function setCurrentRegion(currentRegion) {
            localStorage.setItem('currentRegion', JSON.stringify(currentRegion));
        }

        function setRegions(regions) {
            localStorage.setItem('regions', JSON.stringify(regions));
        }

        function getToken() {
            return localStorage.token;
        }

        function getUser() {
            var user = localStorage.user;
            return (user) ? JSON.parse(user) : user;
        }

        function getInvitationId() {
            return localStorage.invitationId;
        }

        function getCurrentRegion() {
            var currentRegion = localStorage.currentRegion;
            return (currentRegion) ? JSON.parse(currentRegion) : currentRegion;
        }

        function getRegions() {
            var regions = localStorage.regions;
            return (regions) ? JSON.parse(regions) : regions;
        }

        function isSameUser() {
            var previousToken = localStorage.previousToken,
                token = localStorage.token;

            if (previousToken === token) {
                return true;
            }
            localStorage.previousToken = token;
        }

        function clear(param) {
            if (param) {
                localStorage.removeItem(param);
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
    }
})();