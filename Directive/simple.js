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

app.directive("commentAgain", function(){
  return {
    restrict: 'M',
    replace: true,
    template: "<button class='watch' ng-click='greet()'>{{ something }}</button>",
    link: function(scope, element, attrs){

      // using scope to set variables is the preferred way.
      //You can also set stuff with element but it is not a good practice to follow.
      scope.something = "Bye";

      scope.greet = function () {
        scope.something = "Hi";
      };
    }
  }
});
