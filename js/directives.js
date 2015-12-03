(function() {
  angular.module('app.directives', [])
  .directive('highlightError', function () {
    var directiveDefinitionObject = {
        restrict: 'A',
        template: '<span ng-click="localFunction()" ng-class="selected"  ng-transclude></span>',
        replace: true,
        scope: {
            model: '='
        },
        transclude: true,
        link: function (scope, element, attrs) {
            scope.localFunction = function () {
                scope.model.value = scope.$id;
            };
            scope.$watch('model.value', function () {
                // Is this set to my scope?
                if (scope.model.value === scope.$id) {
                    scope.selected = "highlightError";
                } else {
                    // nope
                    scope.selected = '';
                }
            });
        }
    };
    return directiveDefinitionObject;
});

}).call(this);


