// Float the Clouds

$(document).ready(function(){
  var windowTop = $(window).scrollTop(),
      windowHeight = $(window).height()

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.js-cloud-1').css({
      'left': (windowTop) * .3 + 'px'
    });

    $('.js-cloud-2').css({
      'left': (windowTop) * .7 + 'px'
    });

  });

});