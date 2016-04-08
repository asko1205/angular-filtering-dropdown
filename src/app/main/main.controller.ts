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
}
