'use strict';
$(document).ready(function(){
  // Init Slick slider
  $('.slider').slick({
    autoplay: true,
    arrows: false,
    dotsClass: 'slider__dots',
    dots: true
  });



  // noUiSlider
  var priceRange = document.getElementById('price-range'),
  minPrice = document.getElementById('min-price'),
  maxPrice = document.getElementById('max-price');

  if (priceRange) {
    noUiSlider.create(priceRange, {
      start: [0, 15000],
      connect: true,
      range: {
        'min': 0,
        'max': 22000
      }
    });

    // Updating input value on slider handle
    priceRange.noUiSlider.on('update', function ( values, handle ) {
      if ( handle == 0 ) {
        minPrice.value = parseInt(values[handle], 10);
      } else if ( handle == 1 ) {
        maxPrice.value = parseInt(values[handle], 10);
      }
    });

    // Updating handle position on input value changing
    minPrice.addEventListener('change', function ( ) {
      priceRange.noUiSlider.set([this.value, null]);
    });

    maxPrice.addEventListener('change', function ( ) {
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



    // Popup
    var mapButton = document.querySelector('.map__btn'),
        popup = document.querySelector('.feedback'),
        popupInputs = Array.prototype.slice.call(popup.querySelectorAll('input[type="text"], input[type="email"], textarea')),
        userName = popup.querySelector('.feedback__input[name="user-name"]'),
        close = popup.querySelector('.feedback__close'),
        popupSubmit = popup.querySelector('.feedback__submit');

    mapButton.addEventListener('click', function(event){
      event.preventDefault();
      popup.classList.remove('feedback--hide');
      popup.classList.add('feedback--show');
      userName.focus();
    });

    close.addEventListener('click', function(event){
      event.preventDefault();
      popup.classList.add('feedback--hide');
      popup.classList.remove('feedback--show');
      popup.classList.remove('feedback--js_shake');
      popupInputs.forEach(function(el){
        el.classList.remove('feedback__input--js_invalid')
      });
    });

    function currentInputsValue() {
      var popupInputsValue = [];

      popupInputs.forEach(function(el){
        popupInputsValue.push(el.value);

      });
      return popupInputsValue;
    }



  // Validation
  function validateInput(el) {
    el = this || el;
    if (el.value) {
      el.classList.remove('feedback__input--js_invalid');
      el.classList.add('feedback__input--js_valid')
      return true
    } else {
      el.classList.remove('feedback__input--js_valid');
      el.classList.add('feedback__input--js_invalid');
      return false
    }
  }

  if (popupInputs) {
    popupInputs.forEach(function(el){
      el.addEventListener('blur', validateInput);
    });
  }

  popupSubmit.addEventListener('click', function(event){
    if (currentInputsValue().indexOf('') > -1) {
      event.preventDefault();
      popupInputs.forEach(function(el){
        validateInput(el);
      });
      popup.classList.add('feedback--js_shake');
    }
  })
});



// Google Maps JS Api
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







