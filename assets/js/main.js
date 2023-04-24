(function($) {
  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
	});
  /*--/ Home Typed /--*/
		var home = new Typed('.text-home', {
		strings: [ 'Competitive Programmer','Full-stack Web Developer'],
		typeSpeed: 40,
		backSpeed: 80,
		backDelay: 700,
		loop:true,
		loopCount: Infinity,
		smartBackspace: true // Default value
		});
	  /*--/ about Typed /--*/
		var about = new Typed('.text-about', {
		strings: [ 'Web Developer.','Web Developer.', 'Wordpress Developer.', 'Professional Freelancer.' ],
		typeSpeed: 40,
		backSpeed: 80,
		backDelay: 700,
		loop:true,
		loopCount: Infinity,
		smartBackspace: true // Default value
		});
		/*--/ portfolio-section /--*/
		$('.port-items').isotope({
            // options
            itemSelector: '.pr-item',
            layoutMode: 'fitRows'
        });
        $('.port-menu ul li').click(function(){
            $('.port-menu ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.port-items').isotope({
                filter: selector
            });
            return false;
        });
		/*--/ creative /--*/
		var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer li");
		var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

		function showPanel(panelIndex) {
		tabButtons.forEach(function(node){
		});
		tabPanels.forEach(function(node){
        node.style.display="none";
		});
		tabPanels[panelIndex].style.display="block";
		}
		showPanel(0);
})(jQuery);