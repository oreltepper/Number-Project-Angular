(function() {
    var app = angular.module('favorite-numbers-section', ['dataservices']);

    app.service('FavoritesNumbers', function() {
        this.FavoritesNumbersSerivce = numbersFacts;
        return this;
    });

    app.controller("FavoriteController", ['$scope', 'FavoritesNumbers',
        function($scope, FavoritesNumbers) {

            $scope.existsFavorite = function() {
                var count = 0;
                for (var i = 0; i < numbersFacts.length; i++) {
                    if (numbersFacts[i].Favorite)
                        count++;
                }
                if (count > 0)
                    return false;
                else return true;
            };

            $scope.numOfFavorite = function() {
                var count = 0;
                for (var i = 0; i < numbersFacts.length; i++) {
                    if (numbersFacts[i].Favorite)
                        count++;
                }
                return count;
            };

            $scope.FavoritesNumbersChecked = FavoritesNumbers.FavoritesNumbersSerivce;
        }
    ]);

})();
