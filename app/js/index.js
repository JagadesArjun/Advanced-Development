(function () {

    var mainApp = angular.module("mainApp", ['ngRoute', 'ngCookies']);
    mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.

            when('/login', {
                resolve: {
                    "check": function (access, $location) {
                        if (access.checkIfLoginNeed() === 'True') {
                            console.log("success");
                            $location.path('/home');
                        } else {
                            $location.path('/login');
                        }
                    }
                },
                templateUrl: 'templates/login.html',
                controller: 'loginController'

            }).

            when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            }).

            when('/type/:name/:type', {
                templateUrl: 'templates/type.html',
                controller: 'typeController'
            }).

            when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'aboutController'
            }).

            when('/logout', {
                controller: 'logoutController'
            }).

            otherwise({
                redirectTo: '/login'
            });
    }]);

    mainApp.controller('loginController', ['$scope', '$http', '$location', 'bec', 'sCookie', 'access', function ($scope, $http, $location, bec, sCookie, access) {
        $scope.login = function () {
            if (access.checkIfLoginNeed() === 'True') {
                $location.path('/home');
            }
            var logdata = {'email': $scope.emailId, 'password': $scope.password};
            bec.post('login', logdata).success(function (resp_data) {
                if (resp_data.status === 'complete') {
                    sCookie.put('email', resp_data.email);
                    sCookie.put('token', resp_data.token);
                    $location.path('/home/');
                } else {
                    $location.path('/login/');
                }
            });
        };
    }]);

    mainApp.controller('logoutController', ['logout', function (logout) {
        logout.done();
    }]);

    mainApp.controller('homeController', function ($scope) {
        $scope.message = "mynewpage";
        $scope.sample = {
            "status": "inprogress",
            "data": [{
                "292377472384": {"status": "complete"},
                "2938398272": {"status": "inprogress"}
            }]
        };
        var sa = ["2938398272", "27238423438398272", "cnisjdncnsdc", "27238423438398272"];
        var ka = {"292377472384": {"data": "data"}, "2938398272": {"data": "data"}};
        var ra = Object.keys($scope.sample.data[0]);
        console.log(ra);
        $scope.okayData = function () {
            angular.forEach(sa, function (value) {
                if ($scope.sample.data[0][value].status === "complete") {
                    var index = sa.indexOf(value);
                    sa.splice(index, 1);
                }
            });
            $scope.sample = {
                "status": "complete",
                "data": [{
                    "292377472384": {"status": "complete"},
                    "2938398272": {"status": "inprogress"},
                    "cnisjdncnsdc": {"status": "complete"},
                    "27238423438398272": {"status": "complete"}
                }]
            };
            console.log(sa);
        }
    });

    mainApp.controller('typeController', ['$rootScope', '$scope', '$route', '$routeParams', function ($rootScope, $scope, $route, $routeParams) {
        $scope.routeParams = {};
        $scope.routeParams.name = $routeParams.name;
        $scope.routeParams.type = $routeParams.type;
        if ($scope.routeParams.name === "hospital" && $scope.routeParams.type === "ent") {
            $scope.outPutData = [{
                "name": "xyz",
                "type": "hospital",
                "type-of-type": "eye",
                "address": "abcdefghab cdefgha bcdefghab cdefghabcdef ghabcdefgh abcdefghab cdefghabc defghabcd efghab cdefghab cdefgha bcdefgh abcdefg habcd efgh  efgh efgh efgh efgh efgh efgh",
                "owner": "abc",
                "shop-num": "number",
                "location_lattitude": "876237623",
                "location_longitude": "jhbsdbhsdc",
                "status": "open",
                "review": 89,
                "img_url": [{"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"}]
            }, {
                "name": "new",
                "type": "hospital",
                "type-of-type": "eye",
                "address": "abcdefghab cdefgha bcdefghab cdefghabcdef ghabcdefgh abcdefghab cdefghabc defghabcd",
                "owner": "abc",
                "shop-num": "number",
                "location_lattitude": "876237623",
                "location_longitude": "jhbsdbhsdc",
                "status": "closed",
                "review": 92,
                "img_url": [{"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"}]
            }, {
                "name": "new",
                "type": "hospital",
                "type-of-type": "eye",
                "address": "abcdefghab cdefgha bcdefghab ",
                "owner": "abc",
                "shop-num": "number",
                "location_lattitude": "876237623",
                "location_longitude": "jhbsdbhsdc",
                "status": "tooclose",
                "review": 23,
                "img_url": [{"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"}]
            }, {
                "name": "new",
                "type": "hospital",
                "type-of-type": "eye",
                "address": "abcdefghab cdefgha bcdefghab cdefghabcdef ghabcdefgh ",
                "owner": "abc",
                "shop-num": "number",
                "location_lattitude": "876237623",
                "location_longitude": "jhbsdbhsdc",
                "status": "noshopday",
                "review": 44,
                "img_url": [{"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"},
                    {"url": "images/theater.jpg"}]
            }];
        }

    }]);

    mainApp.controller('aboutController', function ($scope) {
        $scope.message = "This page will be used to display all the students";
    });

})();