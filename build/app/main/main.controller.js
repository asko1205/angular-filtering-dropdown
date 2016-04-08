System.register("app/main/main.controller.spec", [], function($__export) {
  "use strict";
  return {
    setters: [],
    execute: function() {
      (function() {
        'use strict';
        describe('controllers', function() {
          beforeEach(module('filteringDropdownProject'));
          it('should define more than 5 awesome things', inject(function($controller) {
            var vm = $controller('MainController');
            expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
            expect(vm.awesomeThings.length > 5).toBeTruthy();
          }));
        });
      })();
    }
  };
});
