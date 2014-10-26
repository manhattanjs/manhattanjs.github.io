// Float the Clouds

$(document).ready(function(){

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.js-cloud-1').css({
      'transform':'translateX('+(windowTop) * .3 +'px)'
    });

    $('.js-cloud-2').css({
      'transform':'translateX('+(windowTop) * .7 +'px)'
    });
  });
});
