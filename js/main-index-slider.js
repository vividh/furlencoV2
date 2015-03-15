$(document).ready(function() {

	$('.intro-slider').owlCarousel({
		singleItem: true,
		pagenation: true,
		itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false
	});
 
});