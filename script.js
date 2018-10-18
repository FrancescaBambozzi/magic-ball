//list of random answers
$(document).ready(function(){

  var magic8Ball = {};
  $("#answer").hide();

  magic8Ball.listOfAnswers = [
                             "Certain",
                             "Uncertain",
                             "Doubtfully",
                             "Definitely",
                             "Yes",
                             "No",
                             "Likely",
                             "Unlikely",
                             "Maybe",
                             "Unsure",
                             "Not Now",
                             "Ask Me Later"];

  magic8Ball.askQuestion = function(question){

 //moved shake effect
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

//take the list of answers and displays them randomly
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
     };

    var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png.png");

 // moved set time out function here inside onClick function
    setTimeout(
      function() {
     var question = prompt("Ask a yes or no question");
     magic8Ball.askQuestion(question);
     }, 500);
  };
  $("#questionButton").click(onClick);

});
