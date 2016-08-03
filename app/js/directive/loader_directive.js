var mainApp = angular.module("mainApp");

mainApp.directive('loader', function () {
    return {
        restrict: "E",
        scope: {
            show: "="
        },
        templateUrl: "components/loader-directive.html",
        controller: ['$scope', function ($scope) {

        }]
    };
});