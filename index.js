
document.querySelectorAll(".button.submit")[0].addEventListener("click", function() {
        var answer = document.getElementById("answer").value
        if (answer.toLowerCase() == "bangkok") {
            document.querySelectorAll(".nav-item a")[1].href = "./messages.html";
            document.getElementById("answerResponse").innerHTML = "Correct Code! Messages Unlocked."
        }
        else {
            document.getElementById("answerResponse").innerHTML = "Incorrect Code. Messages Locked."
        }
});

    
