/**
 * Created by qingyun on 16/10/9.
 */
angular.module('myApp.detailController',[])
.controller('detailController',['$scope','$http','$routeParams','$sce',function ($scope,$http,$routeParams,$sce) {

   // alert($routeParams.postid);
    $scope.mine = {
      
        title:"",
        timeAndSource:"",
        content:"",
        goBack: goBack
    };
    function goBack() {
        window.history.go(-1);
    }
    (function () {
        var myUrl = "http://c.m.163.com/nc/article/" + $routeParams.postid + "/full.html";
        
        var promise = $http({
            method:'jsonp',
            url:"http://localhost:3001?myUrl="+myUrl+"&callback=JSON_CALLBACK"
        });
        promise.success(function(result){
            result = result[$routeParams.postid]
            
            $scope.mine.title = result.title;
            
            $scope.mine.timeAndSource = result.source + result.ptime;

            if (result.img && result.img.length){
                for (var i in result.img){
                    
                    var width = result.img[i].pixel.split("*")[0];
                    
                    var str = "<img src=" + JSON.stringify(result.img[i].src) + "style='width:80%;'" + ">";

                    result.body = result.body.replace(result.img[i].ref,str);
                    
                }
            }
            
            $scope.mine.content = $sce.trustAsHtml(result.body);
            console.log(result);
        });
        promise.error(function(e){
            console.log(e);
        });
    })();
    
    
}]);