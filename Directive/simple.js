var app = angular.module("simple", []);

app.directive("comments", function(){
  return {
    restrict: "M",
    link: function(){
      console.log("I am simply watching you.")
    }
  }
});

app.directive("cool", function(){
  return {
    restrict: "A",
    link: function(){
      console.log("This adds functionality")
    }
  }
});

app.directive("Interesting", function(){
  return {
    restrict: "C",
    link: function(){
      console.log("I am so Classical")
    }
  }
});

app.directive("watch", function(){
  return {
    restrict: "A",
    link: function(scope, element, attrs){
      console.log("New stuff");
      console.log(scope);
      console.log(element);
      
      console.log(attrs.watch)
    }
  }
});
