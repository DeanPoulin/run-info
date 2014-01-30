'use strict';

angular.module('runInfoApp')
  .controller('MainCtrl', ['$scope', '$http', '$modal', function ($scope, $http, $modal) {

    $scope.results = [];

    $scope.sort = {
      column: '',
      descending: false
    };

    $scope.changeSorting = function (column) {

      var sort = $scope.sort;

      if (sort.column === column) {
        sort.descending = !sort.descending;
      } else {
        sort.column = column;
        sort.descending = false;
      }
    };

    $http({method: 'GET', url: 'data/results.json'}).
      success(function (data) {
        angular.forEach(data.result, function (result) {
          if (result.Place > 0) {
            $scope.results.push(result);
          }
        });
      }).
      error(function () {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.open = function (result) {
      $modal.open({
        templateUrl: 'views/result.tmpl.html',
        controller: 'ResultCtrl',
        resolve: {
          result: function () {
            return result;
          }
        }
      });
    };
  }]);
