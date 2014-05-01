var app = angular.module("moderate", []);

app.controller("ModerateCtrl", function($scope){
  $scope.sayLoading = function(){
    alert("Loading bomb...");
  }
});

app.directive("enter", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      scope.$apply(attrs.enter);
    });
  }
});
