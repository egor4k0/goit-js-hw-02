function checkForSpam(message) {
    const newString = message.toLowerCase(); 

   
    const containsSpam = newString.includes('spam') || newString.includes('sale');

    return containsSpam; 
  
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Big SALE on all items!")); // true
console.log(checkForSpam("This message contains spam content.")); // true
console.log(checkForSpam("Just a normal text.")); // false