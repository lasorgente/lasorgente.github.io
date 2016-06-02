jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    if(screen.width > 1340){
    	$('#logo-id').addClass('logo-lasorgente');
    }
    else {
    	$('#logo-id').addClass('logo-small');
    }
    
    
    $(window).bind('scroll', function() {
        if(screen.width > 1340){
         	if ($(window).scrollTop() > 300) {
         		$('#logo-id').removeClass('logo-lasorgente');
             	$('#logo-id').addClass('logo-small');
        	 }
        }	
      
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

});
