$(document).ready(function(){
  var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]
  //these are the names that will be on the card
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While the cards are shuffling
  while (0 !== currentIndex) {

    // Pick a number
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
  
  for(i in random_deck){  //make the cards
    $('#card_holder').append('<div class="card"><p>'+random_deck[i]+'</p></div>');
  }
  var click_count = 0;
  var first_click = 0;
  var second_click = 0;
  $('.card').on('click', function(){
    if (click_count == 0){ //checks how many clicks we are on 
    	$(this).find('p').css('opacity', 1).addClass('clicked');
      click_count = 1;
      first_click = $(this).find('p').html();
    }
    else{ ///will only work on second clicks
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
