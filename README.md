# Ember_Tutorial

**Ember.js** is a JavaScript framework, based on the MVC pattern. 
- It allows users to create single page web applications by using common indioms and best practices.
- Popular sites and applications that use ember.js: Groupon, Vine, Live Nation, Chipotle, Nordstrom, Apple Music

#Steps to follow

## Set up  
- $ npm install -g ember-cli
- $ ember new super-app
- This creates a full file structure
- All routes are handled in router.js which maps a url to a controller
- i.e. **/about** routes to **about.js** which is linked to the view **about.hbs**

## Running Server 
- $ ember s
- This runs our basic page, which is currently programed to say a basic welcome message

## Adding Functionality
- $ ember g route index
- This creates an route to the index page (via the root) that is automatically linked to the index.js file. 
