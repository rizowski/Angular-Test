var test = angular.module('myTestApp', []);


//Plain Filter
test.filter('simple', function(){
  return function(name){
    return "Hello " + name + "!";
  };
});
