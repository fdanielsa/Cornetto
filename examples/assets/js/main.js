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

var text_cone = new Waypoint.Inview({
  element: document.getElementById("description_text") ,
  enter: function(direction){
    $("#title-cone").removeClass("number-ice-effect");
    $("#delicios-smoothy").removeClass("number-ice-effect");
    $("#text-description").removeClass("number-ice-effect");
    $("#btn-cone-buy").removeClass("number-ice-effect")
  },
  exited: function(direction){
    $("#title-cone").addClass("number-ice-effect");
    $("#delicios-smoothy").addClass("number-ice-effect");
    $("#text-description").addClass("number-ice-effect");
    $("#btn-cone-buy").addClass("number-ice-effect")
  }
});

var text_cone_cookies = new Waypoint.Inview({
  element: document.getElementById("move_different") ,
  enter: function(direction){
    $("#color-diferent").removeClass("number-ice-effect");
    $("#white-letters").removeClass("number-ice-effect");
    $("#description-color").removeClass("number-ice-effect");
    $("#btn-buy").removeClass("number-ice-effect")
  },
  exited: function(direction){
    $("#color-diferent").addClass("number-ice-effect");
    $("#white-letters").addClass("number-ice-effect");
    $("#description-color").addClass("number-ice-effect");
    $("#btn-buy").addClass("number-ice-effect")
  }
});

var cone_cookies = new Waypoint.Inview({
  element: document.getElementById("cookies-text") ,
  enter: function(direction){
    $("#number-sec-cookies").removeClass("number-ice-effect");
    $("#detail-sec-cookies").removeClass("number-ice-effect")
  },
  exited: function(direction){
    $("#number-sec-cookies").addClass("number-ice-effect");
    $("#detail-sec-cookies").addClass("number-ice-effect")
  }
});

var icew_cream_cookies = new Waypoint.Inview({
  element: document.getElementById("cornetto_4") ,
  enter: function(direction){
    $(".ice-cream-cookies-move").removeClass("number-ice-effect");
  },
  exited: function(direction){
    $(".ice-cream-cookies-move").addClass("number-ice-effect")
  }
});
