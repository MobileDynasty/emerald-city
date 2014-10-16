require('angular');
require('angular-ui-router');
require('angular-bootstrap');
require('angular-ui-grid');

module.exports = angular.module('app',
    [
        'ui.bootstrap',
        'ui.router',
        'ui.grid',
        require('../common').name
    ].concat(require('./modules')))
    .config(['$stateProvider', '$urlRouterProvider', '$provide', require('./endpoints')])
    .constant('_', require('lodash'));

angular.element(document).ready(function() {
    console.info("Booting...");
    angular.bootstrap(document, ['app']);
});