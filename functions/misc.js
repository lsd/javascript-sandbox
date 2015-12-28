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