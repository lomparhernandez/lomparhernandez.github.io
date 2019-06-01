window.onscroll = function() {scrolla()};

//recycling my old scrolla func

function scrolla() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById("topnav").style.background = "rgba(0, 0, 0, 0.7)";
		document.getElementById("topnav").style.height = "7vh";
  } else {
		document.getElementById("topnav").style.background = "rgba(0, 0, 0, 0)";
		document.getElementById("topnav").style.height = "10vh";
		document.getElementById("topnav").style.textShadow = "1px 2px 2px #212121";
  }
}

//Google mapping
//or at least trying

/**
function initializeMap() {
	
	//Real coordinates of the restaurant location
	var juanitosLoc = {lat: 37.8005012, lng: -122.4025444};
	
	//Creating a .Map instance and initializing it by passing the target div in our DOM
	//and an object containing the zoom and where the map is centered
	var juanitosMap = new google.maps.Map(document.getElementById("locs"), {zoom: 12, center: juanitosLoc});
	
	//Creating a .Marker instance that sets a marker in a given position of a map
	var pinpoint = new google.maps.Marker({position: juanitosLoc, map: juanitosMap});
}
**/
