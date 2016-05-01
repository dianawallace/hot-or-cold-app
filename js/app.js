
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /* This is where my code starts */
    
    /* Generates a random number between one and a hundred */
    
    function randomNumber() {
        Math.floor(Math.random()*100 + 1);
        window.onload=randomNumber;
    }
    
    
    $('.new').on('click', function() {
        window.location.reload(true);
    });


});


