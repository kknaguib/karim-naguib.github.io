$(document).ready(function() {

  //This is used to collapse the navbar on click - Mobile
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  //Smooth scrolling on navbar click
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        
        return false;
      }
    }
  });

});

//Load Google Maps
var map;

function initMap() {

  // Create the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.86, lng: 151.209},
    zoom: 13,
    mapTypeControl: false
  });

  // Set the map's style
  map.setOptions({styles: styles["silver"]});
}

//Map Styles
var styles = {
  default: null,
  silver: [
    {
      elementType: 'geometry',
      stylers: [{color: '#f5f5f5'}]
    },
    {
      elementType: 'labels.icon',
      stylers: [{visibility: 'off'}]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{color: '#f5f5f5'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#bdbdbd'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#ffffff'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{color: '#757575'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#dadada'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#616161'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#e5e5e5'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#eeeeee'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#c9c9c9'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9e9e9e'}]
    }
  ]
};





