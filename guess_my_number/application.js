$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var number = Math.floor(Math.random()*100);
  var guess_count
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guess = parseInt($('input').val());
    $('#feedback').fadeOut().empty().fadeIn();
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if(guess === number){
      //what happens if the guess is correct?
      $('#feedback').append('You are right!');
    }
    //if the user guessed too high...
    if(guess > number){
      //update the 'feedback' paragraph to tell them to guess lower
      $('#feedback').append('Guess lower!');
    }
    //otherwise, the user guessed too low...
    if(guess < number){
      //update the 'feedback' paragraph to tell them to guess higher
      $('#feedback').append('Go higher!');
    }
      $('input').val(""));
  })
});

