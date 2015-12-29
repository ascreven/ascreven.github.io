(function(){

'use strict';

angular
.module("portfolio")
.controller("projectsController", function(){
  this.projects = [
    "Walk the dog",
    "Buy groceries",
    "Drink coffee",
    "Wake up like this"
  ];
});
})();
