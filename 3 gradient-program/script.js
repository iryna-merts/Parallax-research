var bg = $('#bg');
$(window).scroll(function() {
  var x = $(this).scrollTop();
  bg.css('background-position', '0% ' + parseInt(-x / 10) + 'px');
});