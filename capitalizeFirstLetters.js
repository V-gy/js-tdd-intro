'use strict';


function capitalizeFirstLetters(input) { 
    return input.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  module.exports = capitalizeFirstLetters;