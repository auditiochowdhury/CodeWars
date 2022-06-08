//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
    return [...str].map(s => s.repeat(2)).join('')
  
    // Your code here
  }
  