(function() {
  'use strict';
  angular
  .module('portfolio', [
    'ngResource',
    'ui.router',
    'projects'
  ])
  .config([
    '$locationProvider',
    '$stateProvider',
    RouterFunction
  ]);


  function RouterFunction($locationProvider, $stateProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/home/home.html'
    })
    .state('projects',{
      templateUrl: 'js/projects/projects.html',
      controller: 'projectsController',
      controllerAs: 'projectsViewModel'
    })
    .state('about',{
      templateUrl: 'js/about/about.html'
    })
    .state('contact', {
      templateUrl: 'js/contact/contact.html'
    });
  }
})();
