/**
 * Created by oussama on 5/15/15.
 */
(function () {
  'use strict';

  angular
    .module('thinkster.authentication', [
      'thinkster.authentication.controllers',
      'thinkster.authentication.services'
    ]);

  angular
    .module('thinkster.authentication.controllers', []);

  angular
    .module('thinkster.authentication.services', ['ngCookies']);
})();