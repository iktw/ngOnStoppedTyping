angular.module('ngOnStoppedTyping', [])
    .directive('onStoppedTyping', ['$parse', function ($parse) {
    var linker = function ($scope, element, attrs) {
        var typingTimer;
        $scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            if (newValue !== oldValue) {
                var waitForTimer = attrs.waitFor ? attrs.waitFor : 500;
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function () {
                    console.log(waitForTimer)
                    var expressionHandler = $parse(attrs.onStoppedTyping);
                    expressionHandler($scope);
                }, 800);
            }
        });
    };
    return {
        restrict: 'A',
        link: linker
    }
}]);