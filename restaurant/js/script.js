window.onscroll = function() {scrolla()};

//recycling my old scrolla func

function scrolla() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById("topnav").style.background = "rgba(0, 0, 0, 0.7)";
		document.getElementById("topnav").style.height = "7vh";
  } else {
		document.getElementById("topnav").style.background = "rgba(0, 0, 0, 0)";
		document.getElementById("topnav").style.height = "10vh";
  }
}

//Google mapping
//or at least trying

/**
function juanitosLoc() {
		var mapLoc = {
		center : new google.maps.LatLng(37.8005012,-122.4025444),
		zoom : 14
		};
	var map = new google.maps.Map(document.getElementById("locs"),mapLoc);
}
**/
