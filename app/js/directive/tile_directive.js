var mainApp = angular.module("mainApp");

mainApp.directive('tile', ['$document', '$location', function ($document, $location) {
    return {
        restrict: "E",
        scope: {
            data: "="
        },
        templateUrl: "components/tile-directive.html",
        link: function (scope, element, attr) {
            scope.tileData = scope.data;
        }
    }
}]);