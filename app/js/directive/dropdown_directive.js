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
            scope.goHome = function () {
                $location.path('/home');
                scope.closeAll();
            };
            scope.closeAll = function () {
                scope.dropdown_visible = false;
                scope.dropdown_slect_visible = false;
            };
            scope.goBackDropDown = function () {
                scope.dropdown_slect_visible = false;
            };
            scope.dropDownData = scope.data;
            scope.headerName = scope.name;
            console.log(scope.data, scope.name);
            scope.dropdown_visible = false;
            scope.dropdownVisible = function () {
                scope.dropdown_visible = !scope.dropdown_visible;
                scope.dropdown_slect_visible = false;
            };
            scope.dropdown_slect_visible = false;
            scope.selectListData = function (name) {
                scope.dropdown_slect_visible = true;
                scope.selectListName = name;
                if (name === "hospital") {
                    scope.selectCategory = [{"type": "eye", "url": "images/eye.jpg"}, {
                        "type": "heart",
                        "url": "images/heart-doctor.jpg"
                    }, {"type": "ent", "url": "images/hospital.jpg"}, {
                        "type": "ent",
                        "url": "images/hospital.jpg"
                    }, {"type": "ent", "url": "images/hospital.jpg"}, {
                        "type": "ent",
                        "url": "images/hospital.jpg"
                    }, {"type": "ent", "url": "images/hospital.jpg"}];
                } else if (name === "theater") {
                    scope.selectCategory = [{"type": "action", "url": "images/action.jpg"}, {
                        "type": "comedy",
                        "url": "images/comedy.jpg"
                    }, {"type": "romance", "url": "images/action.jpg"}];
                } else if (name === "park") {
                    scope.selectCategory = [{"type": "garden", "url": "images/park.jpg"}, {
                        "type": "amuzement",
                        "url": "images/park.jpg"
                    }];
                }
            };
            scope.selectpartData = function (name, part) {
                $location.path('/type/' + name + '/' + part + '/');
                scope.closeAll();
            };
        }
    }
}]);