"use strict";
$(document).ready(function(){
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    dotsClass: "slider__dots",
    dots: true
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 59.939132, lng: 30.321471},
    zoom: 17,
    scaleControl: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false
  });

  var image = "img/map-marker.png";
  var nerdsMarker = new google.maps.Marker({
    position: {lat: 59.938752, lng: 30.323789},
    map: map,
    icon: image
  });
}

// noUiSlider
var priceRange = document.getElementById("price-range");
var minPrice = document.getElementById("min-price");
var maxPrice = document.getElementById("max-price");

if (priceRange) {
  noUiSlider.create(priceRange, {
    start: [0, 15000],
    connect: true,
    range: {
      "min": 0,
      "max": 22000
    }
  });

  // Updating input value on slider handle
  priceRange.noUiSlider.on("update", function ( values, handle ) {
    if ( handle == 0 ) {
      minPrice.value = parseInt(values[handle], 10);
    } else if ( handle == 1 ) {
      maxPrice.value = parseInt(values[handle], 10);
    }
  });

  // Updating handle position on input value changing
  minPrice.addEventListener("change", function ( ) {
    priceRange.noUiSlider.set([this.value, null]);
  });

  maxPrice.addEventListener("change", function ( ) {
    priceRange.noUiSlider.set([null, this.value]);
  });
}

// Smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Validation
function validateInput() {
  if (this.value) {
    this.classList.remove("feedback__input--js_invalid");
    this.classList.add("feedback__input--js_valid")
  } else {
    this.classList.remove("feedback__input--js_valid");
    this.classList.add("feedback__input--js_invalid");
  }
}

var inputsList = $("input[type='text'], input[type='email'], textarea");

if (inputsList) {
  inputsList.each(function (i, el){
    el.addEventListener("blur", validateInput);
  });
}





// var feedbackSubmit = document.querySelector(".feedback__submit");

// feedbackSubmit.addEventListener("click", function(e){
//   inputsList.forEach(function (item){
//     if (!item.value) {
//       e.preventDefault();
//       item.classList.add("feedback__input--js_invalid");
//     }
//   });
// })
