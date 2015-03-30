$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var arr = []
while(arr.length < 8){
  var randomnumber=Math.ceil(Math.random()*100)
  var found=false;
  for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
document.write(arr);

  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
