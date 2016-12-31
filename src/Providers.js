(function() {
    var app = angular.module('stmsProject', ['favorite-numbers-section','dataservices']);
    app.controller('DataListController', function($scope, $location, $http, $q) {

        $scope.setFavoriteInProvidersList = function(chkStatus, Numberitem) {
            chkStatus = !chkStatus;
        }

        $scope.clearFavoritesFromDataList = function() {
            for (var i = 0; i < $scope.numbersFactsshow.length; i++) {
                $scope.numbersFactsshow[i].Favorite = 0;
            }
        }

        $scope.countNumberFacts = function() {
            if (numbersFacts.length == NumberOfApiRequests)
                return false
            else return true;
        }

        function getdata() {
            var requests = [];
            for (var i = 0; i < NumberOfApiRequests; i++) {
                requests.push(createNumerForApiTrivia());
            }
            return requests;
        }

        function createNumerForApiTrivia() {
            var input = Math.floor((Math.random() * 200) + 1);
            return getAnswer(input)
                .then(function(item) {
                    numbersFacts.push(item);
                    var place = numbersFacts.indexOf(item);
                    if (place > -1) {
                        numbersFacts[place].Favorite = false;
                        var digit = numbersFacts[place].data.substring(0, (numbersFacts[place].data.indexOf(" ")));
                        var actualfact = numbersFacts[place].data.substring(numbersFacts[place].data.indexOf(" "), numbersFacts[place].data.length);
                        numbersFacts[place].Digit = parseInt(digit);
                        numbersFacts[place].Actualfact = actualfact;
                    }
                })
        }

        function getAnswer(number) {
            return $http.get('https://numbersapi.p.mashape.com/' + number + '/trivia', {
                headers: {
                    'X-Mashape-Key': 'Mh3SqwphBKmshWj5ZdvLUA1bIVSjp14wEMTjsngXnsVT4AvKu0'
                }
            })
        }

        $q.all(getdata())
            .then(function() {
                setNumbers();
            })
            .catch(function() {
                alert("Cant get Data From Server")
            });

        function setNumbers() {
            $scope.numbersFactsshow = numbersFacts;
        }
    });



})();

var NumberOfApiRequests = 50;
var numbersFacts = new Array();
