module.exports = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/bar', '/bar/list');
    $urlRouterProvider.when('/foo', '/foo/list');
    $urlRouterProvider.otherwise('/foo');

    $stateProvider

        /** Project States **/
        .state('foo', {
            url: '/foo',
            templateUrl: 'static/partials/foo/index.html',
            controller: 'FooCtrl'
        })
        .state('foo.list', {
            parent: 'foo',
            url: '/list',
            templateUrl: 'static/partials/foo/list.html',
            controller: 'FooListCtrl'
        })

        .state('bar', {
            url: '/bar',
            templateUrl: 'static/partials/bar/index.html',
            controller: 'BarCtrl'
        })
        .state('bar.list', {
            parent: 'bar',
            url: '/list',
            templateUrl: 'static/partials/bar/list.html',
            controller: 'BarListCtrl'
        });
};