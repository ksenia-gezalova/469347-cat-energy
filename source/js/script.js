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
    zoom: 15,
    center: new google.maps.LatLng(59.95, 30.3)
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOption);
  var image = "../img/map-pin.png";
  var myLatLng = new google.mapsLatLng(59.95, 30.3);
  var pinMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  })
}
google.maps.event.addDomListener(window, 'load', initMap);
