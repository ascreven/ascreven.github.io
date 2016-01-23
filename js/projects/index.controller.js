(function(){

  'use strict';

  angular
  .module("projects")
  .controller("projectsController", function(){
    this.projects = [
      {title: "Hacker Helper", url:"ga-hacker-helper.herokuapp.com", imageUrl: 'styles/images/hacker_helper.png', description: 'I was part of a three-member team that created an app that organizes General Assembly resources by topic. We were able to create the application by making our own API using Express and Mongoose. The two features that I am most proud of are user authentication and our implementation of Materialize. However, overall what stands out most is how much we were able to accomplish together in such a short period of time.'},
      {title: "All About Chew", url: 'https://all-about-chew.herokuapp.com/', imageUrl: 'styles/images/all_about_chew.png', description: 'A Ruby on Rails application that profiles local shelter animals. The app runs on a PostgreSQL database that is updated whenever a local shelter creates, edits, or destroys a profile. Using Devise, I was able to ensure that only authorized users can update the database; however, profiles are open to the public at large.' },
      {title: "Where in the World", url:"where-in-the-world.herokuapp.com", imageUrl: 'styles/images/where_in_the_world.png', description: 'An JavaScript game where players are given a picture of a landmark and must identify where it is located.'}
    ];
  });
})();
