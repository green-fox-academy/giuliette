'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk';
let str = ' - download games';
let diablo = '    - Diablo'
let title = 'my Todos:'
console.log(title.toString());
console.log(todoText.toString());
console.log(str.toString());
console.log(diablo.toString());