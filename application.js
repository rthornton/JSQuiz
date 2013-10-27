$(document).ready(function() {
    var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?",
        choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
        {question: "What color is the sky?", choices: ["Blue", "Green", "Purple", "Black"], correctAnswer:0},
        {question: "What is your name?", choices: ["Arthur", "Lancelot", "Doofus", "French Knight"], correctAnswer:2},
        {question: "What is your quest?", choices: ["Gwen", "Shoes", "Grail"], correctAnswer:2},
        {question: "What is the air-speed of an unladen swallow?", choices: ["10mph", "15mph", "European", "African"], correctAnswer:2}
    ];
    var userResponses = [];
    var currentQuestionIndex = 0;
    var score = 0;

    function shouldDisableBack() {
        return currentQuestionIndex <= 0;
    }

    function setBackButtonStatus() {
        if (shouldDisableBack()) {
            $('#back').attr("disabled", "disabled");
        } else {
            $('#back').removeAttr("disabled", "disabled");
        }
    }

    function clearPreviousQuestion(index) {
        if (index >= 0) {
            if (userResponses.length > 0) {
                // hide question at index -1
                $('#question').empty();
            }
        }
    }

    function showHideElements(index) {
        setBackButtonStatus();
        clearPreviousQuestion(index);
    }

    function buildQuestion(newQuestion, index) {
        var prompt = newQuestion['question'];
        $('<p>' + prompt + '</p>').appendTo($("#question"));
        for (var i = 0; i < newQuestion['choices'].length; i++) {
            if (i == 0) {
                $('<input type="radio" name="item" id="item'+i+'" class="required" value="' + i + '">')
                    .appendTo($("#question")).before(newQuestion['choices'][i]);
            } else {
                $('<input type="radio" name="item" id="item'+i+'" value="' + i + '">')
                    .appendTo($("#question")).before(newQuestion['choices'][i]);
            }
        }

        if (userResponses[index] != undefined) {
            $("#item" + userResponses[index]).attr('checked', true);
        }
    }

    function showQuestion(index) {
        showHideElements(index);

        if (index < allQuestions.length) {
            // Create question
            var newQuestion = allQuestions[index];
            buildQuestion(newQuestion, index);
        } else {
            $('<p>Your score is: ' + score + '</p>').appendTo($("#question"));
            currentQuestionIndex = -1;
            score = 0;
        }
    }

    $("#back").on("click", function(e) {
        e.preventDefault();

        currentQuestionIndex = currentQuestionIndex - 1;
        showQuestion(currentQuestionIndex);
    });

    $("#next").on("click", function(e) {
        e.preventDefault();
        if (currentQuestionIndex >= 0) {
            var userChoice = $("#currentQuestion input[type='radio']:checked").val();
            if (userChoice == undefined) {
                alert("You must select something");
                return;
            } else if (userChoice == allQuestions[currentQuestionIndex]['correctAnswer']) {
                score = score + 1;
            }
        }

        userResponses[currentQuestionIndex] = userChoice;
        currentQuestionIndex = currentQuestionIndex + 1;
        showQuestion(currentQuestionIndex);
    });

    showQuestion(currentQuestionIndex);
});

