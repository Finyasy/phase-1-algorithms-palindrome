function isPalindrome(word) {
  // Write your algorithm here
  let re = /[^a-zA-Z0-9]/g;
  word = word.toLowerCase().replace(re, '');
  const len = word.length;
  for(let i = 0; i < len/2; i++) {
    if(word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome("madam");
isPalindrome("Madam I'm Adam");

/* 
  Add your pseudocode here
*/
// initialize a function that takes in a string.
// Declare a variable re and set it to a regex that matches all non-alphanumeric characters.
// lowercase the string and use regex to remove non-alphanumeric characters.
// declare a variable len and set it to the length of the string.
// use for loop to iterate through the string.
// if the current index is not equal to the last index minus the current index, return false, otherwise return true.
//
/*
  Add written explanation of your solution here
*/
//Half-indexing (len/2)
//We check the end from each part and divide the number of iterations inside the FOR loop by two

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
