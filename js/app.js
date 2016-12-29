$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    arrows: false,
    dotsClass: "slider__dots",
    dots: true
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.939132, lng: 30.321471},
    zoom: 17,
    scaleControl: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false
  });

  var image = 'img/map-marker.png';
  var nerdsMarker = new google.maps.Marker({
    position: {lat: 59.938752, lng: 30.323789},
    map: map,
    icon: image
  });
}
