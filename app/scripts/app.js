'use strict';

angular
    .module('angularI18nDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'i18n'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
            .otherwise({
          redirectTo: '/'
        });
      }).config(['i18nServiceProvider', function (i18nServiceProvider) {
        i18nServiceProvider.setLocales({
            'default': '../i18n/resources-locale_en_US.json',
            'fr': '../i18n/resources-locale_fr_FR.json'
          });
      }]);
