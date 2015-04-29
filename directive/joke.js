
angular.module('jokeApp')
  .directive('joke',function(){
    return{
      restrict: 'E',
      templateUrl: 'directive/joke.html'
    };
  });