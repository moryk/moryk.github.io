$(document).ready(function(){
  $('button').on('click',function(){
      var input=$('input').val();
       $('#item-holder').append("<p>"+input+"</p>") // help to save #
       <input type="button" value="Reset Form" onClick="this.form.reset()" />
  });
});
