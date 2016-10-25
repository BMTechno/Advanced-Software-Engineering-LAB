/**
 * Created by saiteja on 07-09-2016.
 */

var app = angular.module('myApp', []);
//noinspection JSDuplicatedDeclaration
app.controller('lab9',['$scope','$http',function($scope,$http){


    $scope.qetdetails=function() {
        //console.log("in quiz question");
       // $scope.question ="Which of the following operator can be used to access value at address stored in a pointer variable?";
       // $scope.answer="*- value operator gives value stored at particular address";
        $http.get("http://127.0.0.1:8082/getDetails")
            .then(function(response) {
                var json=response.data;
                //console.log(response.data);
               // $scope.detail1 = response.description(0).description;
                console.log(json.description[0].description);
                $scope.detail1 = json.description[0].description;
                $scope.detail2 = json.description[1].description;
                $scope.detail3 = json.description[2].description;
                $scope.detail4 = json.description[3].description;
                $scope.detail5 = json.description[4].description;


            });

}


}])
;