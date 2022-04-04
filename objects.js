'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const wordCount = {};
  
  for (const word of phrase.split(' ')) {
    if (wordCount[word]) {
      wordCount[word] += 1
    } else {
      wordCount[word] = 1
    }
  }

  return wordCount
}



// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code

  
}
