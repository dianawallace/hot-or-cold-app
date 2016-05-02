
jQuery(document).ready(function(S){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /* This is where my code starts */
    
   
    /* Display number of guesses */
    
    var count = 0;
    var number;
    
    function incrementCounter() {
        counter++;
        $('#count').text(count);
    };
    
     /* Generates a random number between one and a hundred */
    
    function randomNumber() {
        number = Math.floor((Math.random()*100) + 1);
    };
    
    /* Display numbers guessed */
    
    $("#guessButton").click(function(e) {
        e.preventDefault();
        var guess = $("#userGuess").val();
        var guessE1 = '<li>' + guess + '</li>';
            $('#guessList').append(guessE1);
            $('#userGuess').val('');
            incrementCounter();
            checkGuess(guess);
    });
    
    
    /* Hot or Cold */
    
    var diff; 
    var guessInt = parseInt(guess);
    
        if (guess === number) {
            $('#feedback').text('Correct');
        } else if (guessInt > number) {
            diff = guessInt - number;
        } else if (guessInt < number) {
            diff = number - guessInt;
        }
        
        if (diff >= 1 && diff <= 10) {
            $("#feedback").text('Very Hot!');
        } else if (diff < 10 && diff <= 20) {
            $("#feedback").text('Hot');
        } else if (diff < 20 && diff <= 30) {
            $("#feedback").text('Warm');
        } else if (diff < 30 && diff <= 50) {
            $("#feedback").text('Cold');
        } else (diff > 50) {
            $("#feedback").text('Ice Cold');
        }
    
    
    $('.new').on('click', function() {
        window.location.reload(true);
    });


});


