var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


function initMap()  {
  var mapOption = {
    zoom: 17,
    center: new google.maps.LatLng(59.9391246,30.3200654)
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOption);
  var image = "../img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.9388935,30.3227905);
  var pinMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  })
}
google.maps.event.addDomListener(window, 'load', initMap);
