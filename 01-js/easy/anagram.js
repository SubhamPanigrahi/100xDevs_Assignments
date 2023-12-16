/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Shortcut NLogN + MLogM solution, where N and M are str1.length and str2.length respectively
  // No Auxillary space

  str1 = str1.toLowerCase().replace(" ", "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(" ", "").split("").sort().join("");

  return (str1 == str2)? true : false;

}

module.exports = isAnagram;
