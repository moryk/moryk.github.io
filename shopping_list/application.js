$(document).ready(function(){
  $('button').on('click',function(){
      var input=$('input').val();
       $('#item-holder').append("<p>"+input+"</p>") 
  });
});
