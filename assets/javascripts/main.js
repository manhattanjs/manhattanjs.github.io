mixpanel.track(
  "Viewed Homepage"
);

var totalScroll = document.body.scrollHeight - window.innerHeight;

if (window.pageYOffset !== undefined && totalScroll > 0) {
  var cloud = document.querySelector('.js-cloud-1');
  var cloudToo = document.querySelector('.js-cloud-2');

  var floatClouds = function () {
    var top = window.pageYOffset;

    cloud.style.transform = "translateX(" + (top * 0.3) + "px)";
    cloudToo.style.transform = "translateX(" + (top * 0.7) + "px)";
  };

  window.addEventListener('scroll', floatClouds);
}
