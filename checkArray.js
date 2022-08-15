// So You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// So I was given the parameters a and x. A is the array and i need to check if the value x will be in the array.
// This is a simple if conditional problem, and I had to find a method that can check for things in an array. That would be .includes()
function check(a, x) {
    if (a.includes(x)){
      return true
    }else return false
    // your code here
  }