module filteringDropdownProject {
  'use strict';

  export class Config {
    /** @ngInject */
    constructor($logProvider: ng.ILogProvider, uiSelectConfig) {
      // enable log
      $logProvider.debugEnabled(true);
      // set options third-party lib
      uiSelectConfig.theme = 'select2';
    }

  }
}
