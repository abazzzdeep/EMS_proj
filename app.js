var app = angular.module('employeeApp', []);

app.controller('MainController', function ($scope) {
  $scope.employees = [
    { name: 'Abhash Deep', position: 'Developer', contact: 'abde21cs@cmrit.ac.in' },
    { name: 'Abazzz', position: 'Designer', contact: 'abhashdeeep@gmail.com' }
  ];

  $scope.isAddFormVisible = false;
  $scope.isEditFormVisible = false;
  $scope.editableEmployeeIndex = null;
  $scope.newEmployee = {};

  $scope.showAddForm = function () {
    $scope.resetForm();
    $scope.isAddFormVisible = true;
  };

  $scope.showEditForm = function (index) {
    $scope.isEditFormVisible = true;
    $scope.editableEmployeeIndex = index;
    $scope.newEmployee = angular.copy($scope.employees[index]);
  };

  $scope.submitForm = function () {
    if ($scope.isEditFormVisible) {
      $scope.employees[$scope.editableEmployeeIndex] = angular.copy($scope.newEmployee);
    } else {
      $scope.employees.push(angular.copy($scope.newEmployee));
    }

    $scope.resetForm();
  };

  $scope.resetForm = function () {
    $scope.isAddFormVisible = false;
    $scope.isEditFormVisible = false;
    $scope.editableEmployeeIndex = null;
    $scope.newEmployee = {};
  };

  $scope.cancelForm = function () {
    $scope.resetForm();
  };

  $scope.deleteEmployee = function (index) {
    $scope.employees.splice(index, 1);
  };
});
