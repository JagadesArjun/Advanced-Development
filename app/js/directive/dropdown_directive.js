var mainApp = angular.module("mainApp");

mainApp.directive('dropdown', ['$document', '$location', function ($document, $location) {
    return {
        restrict: "E",
        scope: {
            data: "=",
            name: "@"
        },
        templateUrl: "components/dropdown-directive.html",
        link: function (scope, element, attr) {
            scope.dropDownData = scope.data;
            scope.goHome = function () {
                $('.ui.sidebar')
                    .sidebar('hide')
                ;
                $location.path('/home/');
            };
            scope.goAccount = function () {
                $('.ui.sidebar')
                    .sidebar('hide')
                ;
                $location.path('/account/');
            };
            scope.dropdownVisible = function () {
                $('.ui.sidebar')
                    .sidebar('toggle')
                ;
            };
            scope.dropdown_slect_visible = false;
            scope.selectListData = function (name) {
                $('.ui.sidebar')
                    .sidebar('hide')
                ;
                scope.dropdown_slect_visible = true;
                scope.selectListName = name;
                $location.path('/type/' + name + '/' );
            };
        }
    }
}]);