/*
Define a repeatify function on the String object. 
The function accepts an integer that specifies how many times the string has to be repeated. 
The function returns the string repeated the number of times specified. 

For example:

console.log('hello'.repeatify(3));
*/

String.prototype.reaptify = String.prototype.reaptify || function (times) {
    var str = '';

    for (var i = 0; i < times; i++) {
        str += this;
    }

    return str;
};


//Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

var max = function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(4, 2));

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

console.log(maxOfThree(7,8,9));

// another solution
function maxOfThree(a, b, c) {
	if (a > b) {
		if (a > c) {
			return a;
		}
		else {
			return c;
		}
	}
	else if (b > c) {
		return b;
	}
	else {
		return c;
	}
}

console.log(maxOfThree(1,2,5));


// alt solution 
var maxOfThree = [267, 306, 108];
var largest = Math.max.apply(Math, maxOfThree); // 306

console.log(largest);

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, falseotherwise.


// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3  languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
   if (language == 'es') {
       return 'Bonjour worldeh';
   } else if (language == 'de') {
       return 'Hola, mundo';
   } else {
       return 'hello world';
   }
};

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));

//Write a function named assignGrade that:
//takes 1 argument, a number score.
//returns a grade for the score, either "A", "B", "C", "D", or "F".
//Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function assignGrade(numberScore) {
  if (numberScore >= 90) {
      return 'A';
  } else if (numberScore >= 80 && numberScore < 90) {
      return 'B';
  } else if (numberScore >= 70 && numberScore < 80) {
      return 'C';
  } else if (numberScore >= 60 && numberScore < 70) {
      return 'D';
  } else {
      return 'F';
  }
};

console.log(assignGrade(90));
console.log(assignGrade(89));
console.log(assignGrade(79));
console.log(assignGrade(60));
console.log(assignGrade(5));
console.log(assignGrade(-20));

//Write a function named pluralize that:
//takes 2 arguments, a noun and a number.
//returns the number and pluralized form, like "5 cats" or "1 dog".
//Call that function for a few different scores and log the result to make sure it works.
//Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i += 1) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i += 1) {
    console.log(i);
    
    for (var x = 0; x <= 10; x += 1) {
        console.log(i*x);
    }
}