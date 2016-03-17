/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

export function max(a, b) {
  if (typeof a == "string" && typeof b == "number") {
    return b;
  } else if (typeof b == "string" && typeof a == "number") {
    return a;
  }
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

export function maxOfThree(a, b, c) {
  if (typeof(a) == "string") {
    a = -Infinity;
  }
  if (typeof(b) == "string") {
    b = -Infinity;
  }
  if (typeof(c) == "string") {
    c = -Infinity;
  }

  if ((a > b) && (a > c)) {
    return a;
  }

  if ((b > a) && (b > c)) {
    return b;
  }

  if ((c > a) && (c > b)) {
    return c;
  }
}


/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

export function isVowel(char) {
  var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var isVowel = false;
  for (var i = 0; i < vowelArray.length; i++) {
    if (char === vowelArray[i]) {
      isVowel = true;
      break;
    }
  }
  return isVowel;
}

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */
//
// export function rovarspraket(input) {
//   for (var i = 0; i < yourText.length; i++) {
//     var yourText = str.split("");
//     var yourLetter = yourText[i];
//     var isVowel(yourLetter)=your Vowel {
//       return += letter;
//     }
//     else
//     }
//
//     }
//
//   }}
export function rovarspraket(input) {
  var inputAsArray = input.split(""); //Find out why split() is not working
  var output = "";
  for (var i = 0; i < inputAsArray.length; i++) {
    var letter = inputAsArray[i];
    if (isNaN(letter)) {
      if (isVowel(letter) || letter === ' ') {
        output += letter;
      } else {
        output += letter + 'o' + letter;
      }
    } else {
      output += letter;
    }
  }
  return output;
}

export function reverse(str) {
  var output = "";
  for (var i = str.length - 1; i >= 0; i--)
    output += str[i];
  return output;
}

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */


 export function findLongestWord(sentence) {
    var str = sentence.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

/**
 * Part 6
 *
 * Write a function isPalindrome() that takes
 * a string and returns true if it's a palindrome
 * and false if it isn't.
 */

export function isPalindrome(word){
    var len = word.length, i=0, result = true;
    if (len <= 1) return true;
    while(i != len - i - 1){
        var start = word.charAt(i),
        end = word.charAt(len - i - 1);
        if (start != end){
            return false;
        }
        i++;
    }
    return result;
}
