'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code

  //create a for loop 
  for (const index in items) {
    console.log(`${items[index]} ${index}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code

  const result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }

  console.log(result);

}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code


  const sortedItems = items.sort((a,b) => a-b); 

  const shortened = sortedItems.slice(0,n);

  return shortened.reverse();

}

