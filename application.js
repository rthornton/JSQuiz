$(document).ready(function() {
    var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
        {question: "What color is the sky?", choices: ["Blue", "Green", "Purple", "Black"], correctAnswer:0},
        {question: "What is your name?", choices: ["Arthur", "Lancelot", "Doofus", "French Knight"], correctAnswer:2},
        {question: "What is your quest?", choices: ["Gwen", "Shoes", "Grail"], correctAnswer:2},
        {question: "What is the air-speed of an unladen swallow?", choices: ["10mph", "15mph", "European", "African"], correctAnswer:2}
    ];
    var currentQuestionIndex = -1;
    var score = 0;

    function showQuestion(index) {
        if (index > 0) {
            // hide question at index -1
            $('#question').empty();
        }

        if (index < allQuestions.length) {
            // Create question
            var newQuestion = allQuestions[index];
            var prompt = newQuestion['question'];
            $('<p>' + prompt + '</p>').appendTo($("#question"));
            for (var i = 0; i < newQuestion['choices'].length; i++) {
                $('<input type="radio" name="item" id="item" value="' + i + '">')
                    .appendTo($("#question")).before(newQuestion['choices'][i]);

            }
        } else {
            $('<p>Your score is: ' + score + '</p>').appendTo($("#question"));
            currentQuestionIndex = -1
            score = 0;
        }
    }

//   $('#next').on('click', function() {
   $('#currentQuestion').submit(function(e) {
       e.preventDefault();
//       var currentQuestionIndex = $('#question').data('content');
//       var currentScore = $('#question').data('score');
       if (currentQuestionIndex >= 0) {
           var userChoice = $("#currentQuestion input[type='radio']:checked").val();
           if (userChoice == allQuestions[currentQuestionIndex]['correctAnswer']) {
               score = score + 1;
//               alert("Good job.  Your score is now: " + score);
//           } else {
//               alert("Nice try.  Your score is still: " + score);
           }
       }

       currentQuestionIndex = currentQuestionIndex + 1;
//       $('#question').data('content', currentQuestionIndex);
       showQuestion(currentQuestionIndex);
   });

});

