(function(){
  'use strict';


  angular.module('DIApp',[])
  .controller('DIController',DIController)
  .filter('hello',HelloFilter)
  .filter('truth',TruthFilter);
  DIController.$inject = ['$scope','helloFilter'];
  function DIController($scope, helloFilter){

    $scope.sayMessage = function(){
        var msg = "Hey how are you?";
        return msg;
    }
    $scope.sayMessagewithDoing=function(){
        var msg = "Hey how are you?";
        msg=helloFilter(msg);
        return msg;
    }
    // $scope.name="Sai";
    // $scope.upper = function(){
    //       var upCase = $filter('uppercase');
    //       $scope.name=upCase($scope.name);
    // };
    }
  function HelloFilter(){
    return function(input){
      input=input.replace("Hey","Hello");
      return input;
    };
  }
  function TruthFilter(){
    return function(input,target,name){
      input=input.replace(target,name);
      return input;
    };
  }


})();
