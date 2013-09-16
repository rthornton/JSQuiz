$(document).ready(function() {
    var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
        {question: "What color is the sky?", choices: ["Blue", "Green", "Purple", "Black"], correctAnswer:0}];

    function showQuestion(index) {
        // if (index > 0) then hide question index-1
        // Create question
        // Display it
    }

   $('#next').on('click', function() {
       var currentQuestionIndex = $('#question').data('content');
       var currentScore = $('#question').data('score');

       // Get value of radio button selected
       // Check against correctAnswer

       alert(currentQuestionIndex);
   });

   showQuestion(0);
});