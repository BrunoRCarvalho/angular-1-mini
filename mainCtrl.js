angular.module("app").controller("mainCtrl", function($scope) {
  $scope.test = "Some Value";
  $scope.friends = [
    { name: "Joe Blow", gender: "Male" },
    { name: "Jane Doe", gender: "Female" },
    { name: "Charlie Brown", gender: "Male" },
    { name: "Mean Mean Leeroy Brown", gender: "Male" }
  ];
  $scope.removeFriend = index => {
    $scope.friends.splice(index, 1);
  };
  $scope.addFriend = str => {
    $scope.friends.push(str);
    $scope.input = "";
  };
});
