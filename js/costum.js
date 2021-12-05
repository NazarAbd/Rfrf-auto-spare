$(document).ready(function() {
	var owl = $('#owl-one');
	owl.owlCarousel({
	  loop: true,
	  autoplay: true,
	  autoplayTimeout:2000,
	  autoHeight: false,
	   smartSpeed:450,
	   margin: 10,
	   rtl: true,
	  responsiveClass:true,
	  responsive:{
		  0:{
			  items:1,
			  loop:true
		  },
		  600:{
			  items:1,
			  loop:true
		  },
		  1000:{
			  items:1,
			  loop:true
		  }
	  }
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
	var owl = $('#owl-two');
	owl.owlCarousel({
	  loop: true,
	  autoplay: true,
	  autoplayTimeout:2500,
	  autoHeight: false,
	   smartSpeed:450,
	   margin: 10,
	   nav: false,
	  responsiveClass:true,
	  responsive:{
		  0:{
			  items:3,
			  loop:true
		  },
		  600:{
			  items:3,
			  loop:true
		  },
		  1000:{
			  items:5,
			  loop:true
		  }
	  }
	});
  });

//   scroll back button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


