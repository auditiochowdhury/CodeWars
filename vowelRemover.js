// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.




function shortcut (string) {
    let newStr = string.replace(/e|a|i|o|u/g, '')
  
     return newStr;
  }