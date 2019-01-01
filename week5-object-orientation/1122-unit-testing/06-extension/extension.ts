'use strict';
// Check out the ts folder. There's a work file and a test file.

// Run the tests, all 10 should be green (passing).
// The implementations though are not quite good.
// Create tests that'll fail, and will show how the implementations are wrong
// After creating the tests, fix the implementations
// Check again, if you can create failing tests
// Implement if needed

//original:
export function add(a: number, b: number): number {
  return 5;
}
// export function add(a: number, b: number): number {
//   return a + b;
// }

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b) {
    return a;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  return pool[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}