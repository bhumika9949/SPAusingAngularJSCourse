(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.dishes = "";

    $scope.check = function (){
      let dish = $scope.dishes.split(',');
      dish = dish.filter((i)=> i.trim().length > 0)
      if(dish.length == 0)
        $scope.msg = "Please enter data first";
      else if(dish.length <= 3)
          $scope.msg = "Enjoy!"
        else
          $scope.msg =  "Too much!"
    };

}



}) ();
