// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function anagram(a: string, b: string): boolean {
  return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
}
 
