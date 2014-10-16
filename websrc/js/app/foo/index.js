module.exports = angular.module('app.foo', ['common'])
    .config(['apiProvider', function(apiProvider) {
        /* Project APIs */
        apiProvider.endpoint('foo')
            .route('foo/:id/:version')
            .customAction('get', 'list', {isArray: true});
    }])
    .controller('FooCtrl', require('./controller/fooCtrl'))
    .controller('FooListCtrl', require('./controller/fooListCtrl'));
