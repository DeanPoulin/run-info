'use strict';

angular.module('runInfoApp')
  .controller('ResultCtrl', ['$scope', '$modalInstance', 'result', function ($scope, $modalInstance, result) {
    $scope.result = result;

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);