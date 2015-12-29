(function(){

'use strict';

angular
.module("projects")
.controller("projectsController", function(){
  this.projects = [
    "Walk the dog",
    "Buy groceries",
    "Drink coffee",
    "Wake up like this",
    'another one'
  ];
});
})();
