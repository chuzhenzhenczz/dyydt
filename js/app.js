/**
 * Created by qingyun on 16/10/9.
 */
angular.module('myApp',['ngRoute','myApp.detailController','myApp.headlineController'])
.config(['$routeProvider',function ($routeProvider) {
    
    $routeProvider.when('/headline',{
        templateUrl:"headline.html",
        controller:"headlineController"
    });
    
    $routeProvider.when('/detail/:postid',{
        templateUrl:'detail.html',
        controller:'detailController'
    });
    
    $routeProvider.otherwise('/headline');
    
}]);