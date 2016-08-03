var mainApp = angular.module("mainApp");

mainApp.factory('bec', ['$http', 'sCookie', function ($http, sCookie) {
    return {
        post: function (operation, data) {
            return $http({
                method: 'POST', url: 'http://54.149.106.154:8080/v1/', headers: {
                    'operation': operation
                }, data: data
            });
        },
        get: function (operation) {
            return $http({
                method: 'GET', url: 'http://54.149.106.154:8080/v1/', headers: {
                    'operation': operation,
                    'email': sCookie.get('email'),
                    'token': sCookie.get('token')
                }
            });
        }
    }
}]);
mainApp.factory('sCookie', ['$cookies', '$cookieStore', function ($cookies, $cookieStore) {
    return {
        get: function (name) {
            return $cookies[name];
        },
        put: function (key, value) {
            $cookieStore.put(key, value);
        }
    }
}]);
mainApp.factory('access', ['$http', 'sCookie', 'bec', function ($http, sCookie, bec) {
    return {
        checkIfLoginNeed: function () {
            return bec.get('get_user_data');
        }
    }
}]);
mainApp.factory('logout', ['$cookies', '$cookieStore', '$location', '_logger', function ($cookies, $cookieStore, $location, _logger) {
    return {
        done: function(){
            $cookieStore.put('email', undefined);
            $cookieStore.put('token', undefined);
            $location.path('/home');
            _logger.info("Successfully logged out");
            return "Done"
        }
    }
}]);
mainApp.factory('_logger', ['$cookies', '$cookieStore', '$location', function ($cookies, $cookieStore, $location) {
    return {
        info: function(data){
            console.log('Info: '+data);
        },
        error: function(data){
            console.log('Error: '+data);
        }
    }
}]);