var api = require('./apiProvider');
require('angular-resource');

module.exports = angular.module('common', ['ngResource'])
    .config(['$provide', function($provide) {
        var apiProvider = new api.ApiProvider();
        $provide.provider('api', apiProvider);
    }]);
