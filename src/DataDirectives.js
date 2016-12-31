(function() {
    var app = angular.module('dataservices', []);
    app.directive('digitData', function() {
        return {
            restrict: 'E',
            scope: {
                myDigit: '=data'
            },
            template: "{{myDigit.Digit}}",
        };
    });
    app.directive('factData', function() {
        return {
            restrict: 'E',
            scope: {
                myFact: '=data'
            },
            template: "{{myFact.Actualfact}}",
        };
    });
})();
