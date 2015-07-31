app.controller('codeCtrl', ['$scope', function($scope){
  $scope.content = "def banner_error(text,scheduler):\nVirtualTest(scheduler,text,True,text,text)";
  $scope.show = function(){
    console.log($scope.content);
  };
}]);

app.directive("codeEditor", function($timeout){
  return {
    restrict: "E",
    replace: true,
    require: "?ngModel",
    transclude: true,
    scope: {
      code : '='
    },
    template: '<div class="code-editor" ng-model="code"></div>',
    link: function(scope, element, attrs, ngModelCtrl, transclude){
      // Initialize Codemirror
      var editor = CodeMirror(element[0], {
        mode: "python",
        theme: "default",
        lineNumbers: true
      });

      // Handle setting the editor when the model changes if ngModel exists
      if(ngModelCtrl) {
        // Timeout is required here to give ngModel a chance to setup. This prevents
        // a value of undefined getting passed as the view is rendered for the first
        // time, which causes CodeMirror to throw an error.
        $timeout(function(){
          ngModelCtrl.$render = function() {
            editor.setValue(ngModelCtrl.$viewValue);
          }
        })
      }

      transclude(scope, function(){
        var initialText = scope.code;
        editor.setValue(initialText);

        // Handle setting the model if ngModel exists
        if(ngModelCtrl){
          // Wrap these initial setting calls in a $timeout to give angular a chance
          // to setup the view and set any initial model values that may be set in the view
          $timeout(function(){
            // Populate the initial ng-model if it exists and is empty.
            // Prioritize the value in ngModel.
            if(initialText && !ngModelCtrl.$viewValue){
              ngModelCtrl.$setViewValue(initialText);
            }

            // Whenever the editor emits any change events, update the value
            // of the model.
            editor.on('change', function(){
              ngModelCtrl.$setViewValue(editor.getValue());
            });
          });
        }
      });

      // Clean up the CodeMirror change event whenever the directive is destroyed
      scope.$on('$destroy', function(){
        editor.off('change');
      });
    }
  }
});

