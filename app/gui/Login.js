const electron = require('electron');
const ipc = electron.ipcRenderer;
var loginHandler=require("../core/LoginHandler");

var app = angular.module("loginApp",['pascalprecht.translate']);


app.config(['$translateProvider',function ($translateProvider) {
    $translateProvider.translations('en',{
        'Name':'Name',
        'Password':'Password',
        'Login':'Login'
    });

    $translateProvider.translations('zh',{
        'Name':'姓名',
        'Password':'密码',
        'Login':'登录'
    });

    $translateProvider.preferredLanguage('zh');
}]);

app.controller('loginCtl', function ($scope) {
    $scope.verify = function () {
        console.log('Login');
        loginHandler.login_verify($scope.name,$scope.psw);
    }
});