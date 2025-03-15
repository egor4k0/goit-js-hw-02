function formatMessage(message, maxLength) {
  return message.length <= maxLength 
    ? message 
    : message.slice(0, maxLength) + "...";
}

console.log(formatMessage("Hello, world!", 20));  // "Hello, world!"
console.log(formatMessage("JavaScript is awesome", 10));  // "JavaScript..."
console.log(formatMessage("Short text", 15));  // "Short text"
console.log(formatMessage("This is a long message", 7));  // "This is..."
