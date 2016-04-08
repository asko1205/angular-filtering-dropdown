module filteringDropdownProject {
  'use strict';

  export class MainController {
    public books;
    static $inject = [];
    /* @ngInject */
    constructor () {

      this.books = [
        {id: 1, title:"Around the world in 80 days", author:"Michael Palin"},
        {id: 2, title:"Himalaya", author:"Michael Palin"},
        {id: 3, title:"Europe Through the Back Door", author:"Rick Steves"}
      ];
    }

  }

  /* AngularJS default filter with the following expression:
  * "person in people | filter: {name: $select.search, age: $select.search}"
  * performs a AND between 'name: $select.search' and 'age: $select.search'.
  * We want to perform a OR.
  */
  export function propsFilter(){
    return function(items, props) {
      var out = [];

      if (angular.isArray(items)) {
        items.forEach(function(item) {
          var itemMatches = false;

          var keys = Object.keys(props);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    } // end return
  } // end export

}
