(function() {
  'use strict';
  angular
  .module('portfolio', [
    'ui.router',
    'projects'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'js/home/index.html'
    })
    .state('projectIndex',{
      url: '/projects',
      templateUrl: 'js/projects/index.html',
      controller: 'projectsController',
      controllerAs: 'projectsViewModel'
    });
  }
})();
