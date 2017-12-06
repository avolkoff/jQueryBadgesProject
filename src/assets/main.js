$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/185856.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
    }
  });

});
