$(document).ready(function() {

    $('a[href^="#"]').click(function(e) {
	    e.preventDefault();
	    volver = $(this).attr("href");
	    $("html, body").animate({
	        scrollTop: $(volver).offset().top
	    }, 2000);
    });
    
});