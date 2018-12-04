'use strict'
const fs = require 'fs';

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch(e) {
      console.log(e.message);
      return null;
    }
  }

  function checkNumbers(fileName: string): string {
    const fileContent = readFromFile(fileName);
    if (fileContent !== null) {
      
    }
  }