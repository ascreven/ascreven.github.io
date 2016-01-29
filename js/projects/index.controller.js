(function(){

  'use strict';

  angular
  .module("projects")
  .controller("projectsController", function(){
    this.projects = [
      {title: "Hacker Helper", url:"https://ga-hacker-helper.herokuapp.com/", imageUrl: 'styles/images/hacker_helper.png', description: 'I was part of a three-member team that created an app that organizes General Assembly resources by topic. We were able to create the application by making our own API using Express and Mongoose. The two features that I am most proud of are user authentication and our implementation of Materialize. However, overall what stands out most is how much we were able to accomplish together in such a short period of time.'},
      {title: "All About Chew", url: 'https://all-about-chew.herokuapp.com/', imageUrl: 'styles/images/all_about_chew.png', description: 'A Ruby on Rails application that profiles local shelter animals. I recently integrated the Petfinder API so local animals that are currently available would automatically seed the app. The app previously ran on a PostSQL database that users were able to update; however, this required a lot of repetitive manual work from the shelters to update and remove animal profiles.' },
      {title: 'Pansori.us', url: 'http://pansorius.herokuapp.com/', imageUrl: 'styles/images/pansori.png', description: "A project manager, user experience, and web developer cross-collaborative team project that built a Ruby on Rails website for a DC startup	that connects high potential Asian women to mentors."},
      {title: "Where in the World", url:"https://where-in-the-world.herokuapp.com/", imageUrl: 'styles/images/where_in_the_world.png', description: 'An JavaScript game where players are given a picture of a landmark and must identify where it is located.'}
    ];
  });
})();
