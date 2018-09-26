var effect= document.getElementById("avatar-effect")
var avatars= new Parallax(effect);

var move=document.getElementById("effect-move")
var interactive_bkg= new Parallax(move);

var cone=document.getElementById("cone_bkg")
var ice_cream= new Parallax(cone);

var ice=document.getElementById("ice_cream")
var cone= new Parallax(ice);

var cream=document.getElementById("cornetto_4")
var sexy_cone= new Parallax(cream);

var animated = new Waypoint.Inview({
  element: document.getElementById('sec1') ,
  enter: function(direction) {
  	$(".text-1").removeClass("disappear_text");
  	$(".ice-cream-animated").removeClass("disappear_text")
  },
  exited: function(direction){
  	$(".text-1").addClass("disappear_text");
  	$(".ice-cream-animated").addClass("disappear_text")
  }
});

var navbar = new Waypoint.Inview({
  element: document.getElementById('nav-animated') ,
  enter: function(direction) {
  	$(".cono").removeClass("disappear_text")
  },
  exited: function(direction){
  	$(".cono").addClass("disappear_text")
  }
});

var nav_menu = new Waypoint.Inview({
  element: document.getElementById('menu') ,
  enter: function(direction) {
  	$(".home").removeClass("disappear_text")
  },
  exited: function(direction){
  	$(".home").addClass("disappear_text")
  }
});

var chocolate_cone = new Waypoint.Inview({
	element: document.getElementById('sec2') ,
	enter: function(direction){
		$(".number-animation").removeClass("number-ice-effect");
		$(".appearance").removeClass("number-ice-effect")
	},
	exited: function(direction){
		$(".number-animation").addClass("number-ice-effect");
		$(".appearance").addClass("number-ice-effect")
	}
});