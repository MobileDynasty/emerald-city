module.exports = angular.module('app.common', [])
    .controller('NavCtrl', require('./controller/navCtrl'))
    .factory('UserService', [ '$window', function($window) {
        return {
            profile: $window.userProfile
        };
    }]);
