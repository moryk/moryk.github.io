$(document).ready(function(){
  $('#submit').on('click',function(){
      var input=$('input').val();
       $('#item-holder').append("<p>"+input+"</p>") // help to save #
  });
  $('#clear').on('click',function(){
  $('#item-holder').empty()
  });
});
