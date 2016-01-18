(function() {
  'use strict';
  angular
  .module('portfolio', [
    'ngResource',
    'ui.router',
    'projects'
  ])
  .config([
    '$stateProvider',
    '$locationProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/home/index.html'
    })
    .state('projects',{
      url: '/projects',
      templateUrl: 'js/projects/projects.html',
      controller: 'projectsController',
      controllerAs: 'projectsViewModel'
    })
    .state('about',{
      url: '/about',
      template: "I'm in the about page"
    });
  }
})();
