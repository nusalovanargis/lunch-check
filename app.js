(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
      $scope.messageClass = "";
  
      $scope.checkIfTooMuch = function () {
        if ($scope.lunchItems.trim() === "") {
          $scope.message = "Please enter data first";
          $scope.messageClass = "red";
        } else {
          var items = $scope.lunchItems.split(',');
          var filteredItems = items.filter(function (item) {
            return item.trim() !== "";
          });
  
          if (filteredItems.length <= 3) {
            $scope.message = "Enjoy!";
            $scope.messageClass = "green";
          } else {
            $scope.message = "Too much!";
            $scope.messageClass = "green";
          }
        }
      };
    }
  })();
  