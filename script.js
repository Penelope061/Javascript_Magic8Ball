$(document).ready(function(){
var magic8ball = {};
magic8ball.listofanswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

	$("#answer").hide();

 
magic8ball.announce = function () {var randomNumber = Math.random();
console.log("var randomNumber" + randomNumber);
	var randomNumberArray = randomNumber * magic8ball.listofanswers.length;
console.log("var randomNumberArray" + randomNumberArray);
	var randomIndex = Math.floor(randomNumberArray);
console.log("var randomIndex" + randomIndex);
	var randomAnswer = magic8ball.listofanswers[randomIndex];
console.log("var randomAnswer" + randomAnswer);
								   
$("#answer").text(randomAnswer);
					
};
	$("#answer").hide();
	magic8ball.announce();
		var onClick = function () {
		var question = prompt ("Ask Me Anything"); 
			$("#8ball").effect( "shake" );
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
setTimeout(
    function() {
    }, 3000);
			$("#answer").fadeIn(4000);		
		};
$("#questionButton").click(onClick);
});