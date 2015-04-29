angular.module('jokeApp')
.factory('data',function dataFactory($firebaseArray) {
    return function() {
        var ref = new Firebase('https://unofficial-app.firebaseio.com/');
        return $firebaseArray(ref);
    }
})