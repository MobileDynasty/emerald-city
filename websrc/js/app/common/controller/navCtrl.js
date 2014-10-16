module.exports = ['$scope', 'UserService', '$log',
function($scope, UserService, $log) {

    'use strict';

    $scope.state = '';

    $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            $scope.state = (toState.parent) ? toState.parent : toState.name;
        });
    $scope.user = UserService.profile.user;
}];