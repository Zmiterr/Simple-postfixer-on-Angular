/**
 * Created by Zmiter on 16.07.2015.
 */
'use strict';

/* Controllers */
var myApp = angular.module("myApp", []);
myApp.controller("postfixerCtrl", function($scope){
    $scope.postfix = function(count) {
        if($scope.count>=11&&$scope.count<=14){return countStr=""}
        var countStr =  $scope.count.toString();
        countStr =  countStr[countStr.length-1];
        if(countStr==1){countStr="a"}
        else if(countStr==2||countStr==3||countStr==4){countStr="û"}
        else {countStr=""};
        return countStr;
    };
    $scope.$watch('text', function(text) {

        $scope.text? $scope.totalStr = $scope.text + $scope.postfix()  : $scope.totalStr = "";
});

});