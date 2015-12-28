//Your top choices
//
//Create an array to hold your top choices (colors, presidents, whatever).
//For each choice, log to the screen a string like: "My #1 choice is blue."
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var choices = ['red', 'orange', 'pink', 'yellow'];
for (var i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

for (var i = 0; i < choices.length; i++) {
    var choiceNum = i + 1;
    var choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}
