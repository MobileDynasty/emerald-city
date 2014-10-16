module.exports = angular.module('app.bar', ['common'])
    .config(['apiProvider', function(apiProvider) {
    }])
    .controller('BarCtrl', require('./controller/barCtrl'))
    .controller('BarListCtrl', require('./controller/barListCtrl'));
