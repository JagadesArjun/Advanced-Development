var mainApp = angular.module("mainApp");

mainApp.directive('headerdirective', function () {
    return {
        restrict: "E",
        scope: {},
        templateUrl: "components/header-directive.html",
        controller: ['$scope', function ($scope) {
            $scope.message = "redirect";
            $scope.totalRegisteredShop = "1000";
            $scope.data = [{"name": "hospital", "url": "images/hospital.jpg"}, {
                "name": "park", "url": "images/park.jpg",
                "list": [{"name": "one"}, {"name": "two"}]
            }, {"name": "theater", "url": "images/theater.jpg"},
                {"name": "theater", "url": "images/theater.jpg"},
                {"name": "theater", "url": "images/theater.jpg"}];
        }]
    };
});