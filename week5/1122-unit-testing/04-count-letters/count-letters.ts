'use strict';
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
// and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function countTheseLetters(string: string): Object {
  let lettersToCount: string[] = string.split(''), letterDictionary = {};
  
  lettersToCount.forEach(letter=> 
    letterDictionary[letter] = (letterDictionary[letter] || 0) + 1);
    
  return letterDictionary;
}

console.log(countTheseLetters('hellooooooooo, mi'));


function countLetters(words: string) {
  let splitWord: string[] = words.toLowerCase().split('');
  let result = {};

  splitWord.forEach(char => {
      if (char in result) {
          result[char]++;
      } else if (char !== ' ') {
          result[char] = 1;
      }
  });
  return result;
}

console.log(countLetters('almafácskadejófácska'));

export { countLetters };