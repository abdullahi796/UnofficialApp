angular.module('jokeApp',['firebase'])
.controller('jokeController',function($scope,data) {
    /*
    $scope.joke = 
    [
        {
            setup: {
                text: 'Why was the blonde fired from the M&Ms factory ?',
                author: 'Abdullahi0987'
            },
            punchline:{
                text:"For throwing out all the w's",
                author:'lutz796'
            }
        },
        
        {
            setup: {
                text: 'Why did the chicken run across the road?',
                author: 'Abdullahi0987'
            },
            punchline:{
                text:"To prove to the possum it could actually be done!",
                author:'LarryBall'
            }
        },
        
        {
            setup: {
                text: 'A horse walks into a bar The bartender asks "Why the long face?',
                author: 'lutz796'
            },
            punchline:{
                text:"The horse, incapable of speaking, proceeds to run around the bar, breaking several items in the process.",
                author:'abdullahi0987'
            }
        }        
    ];
    */
    $scope.joke = data();
    console.log($scope.joke)
    this.add = function(punchline) {
        $scope.joke.joke.$add({
                punchline : {
                  author : "user",
                  text : "Sample text"
                },
                setup : {
                  author : "user",
                  text : "Sample text"
                }
          });        
    }
    //$scope.tempJoke = data();
})