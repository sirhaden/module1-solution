(function () {
  'use strict';

  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', function ($scope) {
    $scope.lunch = "";
    $scope.lunchCheckerResult = "";

    $scope.checkLunch = function () {
      var items = $scope.lunch.split(',');

      // handles cases where there are no items between some commas
      var count = items.filter(function (item) {
        return item.length > 0;
      }).length;

      if(count > 3) {
        $scope.lunchCheckerResult = "Too much!";
      }
      else if (count == 0) {
        $scope.lunchCheckerResult = "Please enter data first";
      } else {
        $scope.lunchCheckerResult = "Enjoy!";
      }


      // if(items.length == 1 && items[0].length == 0) {
      //   $scope.lunchCheckerResult = "Please enter data first";
      // }
      // else {
      //   // handles cases where there are no items between some commas
      //   var count = items.filter(function (item) {
      //     return item.length > 0;
      //   }).length;
      //
      //   if(count > 3) {
      //     $scope.lunchCheckerResult = "Too much!";
      //   }
      //   else if (count == 0) {
      //     $scope.lunchCheckerResult = "Please enter data first";
      //   } else {
      //     $scope.lunchCheckerResult = "Enjoy!";
      //   }
      // };


    };
  });
})();
