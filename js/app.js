
jQuery(document).ready(function($){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /* This is where my code starts */
    
    /* Generates a random number */
    
    var number;
    
    function randomNumber() {
        number = Math.floor((Math.random()*100) + 1);
    }
   
   
    /* Displays numbers guessed */
    
    $("#guessButton").click(function(e) {
        e.preventDefault();
        var guess = $("#userGuess").val();
            $('#guessList').append('<li>' + guess + '</li>');
            $('#userGuess').val('');
            incrementCounter();
            hotCold(guess);
    });
    
     /* Displays number of guesses */
    
    var counter = 0;
    
    function incrementCounter() {
        counter++;
        $('#count').text(counter);
    }
    
    
    /* Hot or Cold */
    
    function hotCold(guess) {
        var diff; 
        var guessNum = parseInt(guess);
    
        if (guessNum === number) {
            $('#feedback').text('You are correct');
        } else {
            if (guessNum > number) {
                diff = guessNum - number;
            } else if (guessNum < number) {
                diff = number - guessNum;
            }
            
            if (diff >= 1 && diff <= 10) {
                $("#feedback").text('Very Hot!');
            } else if (diff > 10 && diff <= 20) {
                $("#feedback").text('Hot');
            } else if (diff > 20 && diff <= 30) {
                $("#feedback").text('Warm');
            } else if (diff > 30 && diff <= 50) {
                $("#feedback").text('Cold');
            } else if (diff > 50) {
                $("#feedback").text('Ice Cold');
            }
        }
    } 
    
    /* new game function */
    
    $('.new').on('click', function() {
    /* window.location.reload(true); */
        
        counter = 0;
        $('#count').text(counter);
        $('#guessList').empty();
        $('#feedback').text("Make your Guess");    
    randomNumber();    
    
    });

    randomNumber();
    console.log(number);
});


