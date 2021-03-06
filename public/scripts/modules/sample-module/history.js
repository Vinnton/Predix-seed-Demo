define(['angular', './sample-module'], function(angular, controllers) {
    'use strict';
    // Controller definition
    controllers.controller('HistorysCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.form = {};
        $scope.addHistory = function () {
            var history = {
                maintainanceDate: $scope.history.maintainanceDate,
                systemName: $scope.history.systemName,
                serialNumber: $scope.history.serialNumber,
                manufacturer: $scope.history.manufacturer,
                location: $scope.history.location
            };
            $rootScope.historys.push(history);
            $scope.form = {};
        };
    }]);
});
