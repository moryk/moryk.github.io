$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
  var random_deck = shuffle(card_array);
  
  for(i in random_deck){//builds the cards
    $('#card_holder').append('<div class="card"><p>'+random_deck[i]+'</p></div>');
  }
  var click_count = 0;
  var first_click = 0;
  var second_click = 0;
  $('.card').on('click', function(){
    if (click_count == 0){ //checks which click we are on
    	$(this).find('p').css('opacity', 1).addClass('clicked');
      click_count = 1;
      first_click = $(this).find('p').html();
    }
    else{ //this will run if we are not on the first click
    	$(this).find('p').css('opacity', 1).addClass('clicked');
       click_count = 0;
      second_click = $(this).find('p').html();
      if(first_click == second_click){
      	$('.clicked').css('background-color', 'green').removeClass('clicked');
      }
      else{
        setTimeout( function(){$('.clicked').css('opacity', 0).removeClass('clicked');}, 1500 );
      }
    }
  });
});
