/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />

module filteringDropdownProject {
  'use strict';

  angular.module('filteringDropdownProject', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'app.config'])
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .controller('MainController', MainController);
}
