module.exports = angular.module('app.api', ['common'])
    .config(['apiProvider', function(apiProvider) {
        // set base route for api
        apiProvider.setBaseRoute('api/');
    }]);