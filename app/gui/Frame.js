/**
 * Created by zhang.huiming on 2017/1/11.
 */


var app = angular.module("frameApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Routing');
    $routeProvider
        .when('/chat', {
            controller: 'chatCtrl',
            templateUrl: 'Frame_Chat.html'
        })
        .when('/friends', {
            controller: 'friendsCtrl',
            templateUrl: 'Frame_Friends.html'
        })
        .when('/', {
            controller: 'chatCtrl',
            templateUrl: 'Frame_Chat.html'
         })
        .otherwise({

        });
}]);




