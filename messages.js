
var numMessageBubbles = document.querySelectorAll(".msg").length;
var numMessagesDelivered = 1;
var cluesGiven = 0;

var clue1 = "Our next detective sent us this clue, hopefully it means something to you?\
            <br/>'If you want to find out where I am you need to answer these questions about me'\
            <br/>'you shouldnt need to really think about it if you know me well'\
            <br/><br/>1.the name of our band (5,4)\
            <br/>2.the number of sisters I have (3)\
            <br/>3.my latest new skill im learning (6)\
            <br/>4.my favourite sport (5)\
            <br/>5.the colour of my fur (6)\
            <br/>6.my role in the band (7)\
            <br/>7.my favourite treat (9)\
            <br/>8.my breed (9)\
            <br/>9.my favourite music genre (4)\
            <br/><br/>'Now for my favourite part of the puzzle! \
            Take the 5th, 2nd, 3rd, 2nd, 2nd, 1st, 3rd, 7th, 2nd letter of each word respectively to find me'";
var clue2 = "Our last detective may be harder to get, maybe try looking where clothes get wet?";
var clue3 = "Now you've found the boys we need you to keep them safe and bring them to the safe house on 3rd September 2024. \
            <br/>Details of your flight along with compensation for your time are below: \
            <br/><br/>Tuesday 3rd September \
            <br/>London Heathrow Terminal 4 \
            <br/>15:40pm \
            <br/><br/>Please ensure our detectives are on this flight and remain hidden from the public. \
            <br/>THIS IS A TOP SECRET MISSION. \
            <br/><br/>£500 has been credited to your account from detective KA. \
            <br/><br/>We thank you for your assistance.";


for (var i=1; i<numMessageBubbles; i++) { //hide message bubbles
    document.querySelectorAll(".msg")[i].style.display = "none";
};

function getReply() {
    if (cluesGiven==0) {
        var reply = "Great work! that was fast! 2 more to go!";
    }
    else if (cluesGiven==1) {
        var reply = "Great job! Only one more left now.";
    }
    else if (cluesGiven==2) {
        var reply = "Thanks for your hard work!! I knew we could count on you.";
    }
    return reply
};

function getClue() {
    if (cluesGiven==0) {
        var clue = clue1;
    }
    else if (cluesGiven==1) {
        var clue = clue2;
    }
    else if (cluesGiven==2) {
        var clue = clue3;
    }
    return clue
};

function sendMessage(messageText, direction) {
    document.querySelectorAll(".msg p")[numMessagesDelivered].innerHTML = messageText;
    document.querySelectorAll(".msg")[numMessagesDelivered].classList.add(direction);
    document.querySelectorAll(".msg")[numMessagesDelivered].style.display = "flex";
    numMessagesDelivered++;
};

function outboundMessage(msgtext) {
    if (msgtext.length > 0) {
        sendMessage(msgtext, "outbound");
        var msgReply = getReply()
        setTimeout(sendMessage,3000, msgReply, "inbound");
        var msgClue = getClue()
        setTimeout(sendMessage,5000, msgClue, "inbound");
        cluesGiven++;
        }
};

var sendButton = document.querySelectorAll(".button.send")[0]

sendButton.addEventListener("click", function() {//button pressed
    sendButton.style.color = "black"
    outboundMessage(document.querySelectorAll("input")[0].value);
    document.querySelectorAll("input")[0].value = "";
    setTimeout(function () {
        sendButton.style.color = "white"
    }, 100);
});


    
