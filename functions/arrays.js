//Your top choices
//
//Create an array to hold your top choices (colors, presidents, whatever).
//For each choice, log to the screen a string like: "My #1 choice is blue."
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

powerStones = ['emerald', 'sapphire', 'ruby', 'hearth']

for (var i=0; i<powerStones.length; i++) {
     var choice = powerStones[i];
     console.log("My #" + i + ' choice is ' + choice);
};
//     
//     for (var i = 0; i < times; i++)