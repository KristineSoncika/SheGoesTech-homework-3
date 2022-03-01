// Hometask for next week: Implement the functions which expect the string value as the importing parameter and it can 1) Detect if the string is palindrome 2)Print the  anagram 3) Count, how many words there are in the string 4)Print the maximal occurring character in the string.

// For this task, try to use Loops instead of the generic functions as much as you can

// #1 Function that detects if the string provided is a palindrome

// Version 1
const ifPalindrome = (inputStr) => {
  let str = inputStr.toLowerCase();
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) {
    return `${str.toUpperCase()} is a palindrome.`;
  } else {
    return `${str.toUpperCase()} is not a palindrome.`;
  }
};

console.log(ifPalindrome("racecar"));

// Version 2
const checkIfPalindrome = (inputStr) => {
  let str = inputStr.toLowerCase();
  let splitStr = str.split("");
  let reverseArr = splitStr.reverse();
  let reversedStr = reverseArr.join("");
  if (str === reversedStr) {
    return `${str.toUpperCase()} is a palindrome.`;
  } else {
    return `${str.toUpperCase()} is not a palindrome.`;
  }
};

console.log(checkIfPalindrome("refer"));

// #2 Function that checks if two strings are anagrams

const anagramChecker = (str1, str2) => {
  let splitStr1 = str1.toLowerCase().split("");
  let splitStr2 = str2.toLowerCase().split("");
  let sortedStr1 = splitStr1.sort().join("");
  let sortedStr2 = splitStr2.sort().join("");
  if (sortedStr1 === sortedStr2) {
    return `${str1.toUpperCase()} and ${str2.toUpperCase()} are anagrams`;
  } else {
    return `${str1.toUpperCase()} and ${str2.toUpperCase()} are not anagrams`;
  }
};

console.log(anagramChecker("listen", "silent"));

// #3 Function that counts words in a string

const wordCounter = (str) => {
  let countSpaces = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      countSpaces++;
    }
  }
  if (str[0] === " ") {
    countSpaces--;
  }
  if (str[str.length - 1] === " ") {
    countSpaces--;
  }
  return `The string has ${countSpaces + 1} words.`;
};

console.log(wordCounter("how many words are there in this string?"));

// #4 Function that checks which character occurs the most in the string

// Version 1
const mostOccuringChar = (inputStr) => {
  let str = inputStr.toLowerCase().replace(" ", "");
  let frequencyArr = new Array(str.length);
  let maxChar = str[0];
  let length = str.length;
  for (let i = 0; i < length; i++) {
    frequencyArr[i] = 0;
    for (let j = 0; j < length; j++) {
      if (str[i] === str[j]) {
        frequencyArr[i]++;
      }
    }
  }
  let max = frequencyArr[0];
  for (let i = 0; i < length; i++) {
    if (frequencyArr[i] > max) {
      max = frequencyArr.indexOf(frequencyArr[i]);
      maxChar = str[max];
    }
  }
  return `The most frequently occurring character in the string is: ${maxChar}`;
};
// If more than one character has the same count and that count is max, the function returns the first character with the max count
console.log(mostOccuringChar("sample string"));

// Version 2
const maxOccurringChar = (inputStr) => {
  let str = inputStr.toLowerCase().replace(" ", "");
  let max = 0;
  let maxChar = "";
  str.split("").forEach((item) => {
    if (str.split(item).length > max) {
      max = str.split(item).length;
      maxChar = item;
    }
  });
  // If more than one character has the same count and that count is max, the function returns the first character with the max count
  return `The most frequently occurring character in the string is: ${maxChar}`;
};

console.log(maxOccurringChar("domino"));
