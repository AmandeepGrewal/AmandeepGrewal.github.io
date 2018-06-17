

/*
//Google maps
var myCenter = new google.maps.LatLng(53.5678694,-113.5067238);

function initialize() {
var mapProp = {
  center: myCenter,
  zoom: 12,
  scrollwheel: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);*/

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " card-2" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" card-2 animate-top white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    //alert(x.className.indexOf("show"));
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
    
}


/*==============================
Store messages in FIREBASE
================================*/

//create firebase reference
var dbRef = new Firebase("https://messages-91984.firebaseio.com"); // U NEED TO PUT YOUR DATABASE IN HERE
var contactsRef = dbRef.child('messages');
document.getElementsByName('contactForm')[0].addEventListener("submit", function( event ) {  
  event.preventDefault();
  var name= document.querySelector('#name').value;
  var msg = document.querySelector('#msg').value;
    contactsRef
      .push({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        msg:  document.querySelector('#msg').value
      });
    contactForm.reset();
    document.getElementsByName('contactForm')[0].style.display='none';
    document.getElementById('thanks').style.display='block';
}, false);
