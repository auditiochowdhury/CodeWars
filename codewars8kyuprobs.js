// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    i *= 2
    // i will be an integer. Double it and return it.
    return i;
  }

//   Implement a function which convert the given boolean value into its string representation.


  function booleanToString(b){
    return b.toString()
    
    //your code here
  }
  
//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

function lovefunc(flower1, flower2){
//   moment of truth
  if (flower1 % 2 ===0 && flower2%2!==0){
    return true
  }else if(flower1%2!==0 && flower2%2==0){
    return true
  }else return false
  }

// Simple, remove the spaces from the string, then return the resultant string.


  function noSpace(x){
    return x.split(' ').join('')
  
  }
  
//   Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  
    //Shuffle It
  }


//   We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//   You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
  
//   All values will be positive integers or floats, or zero.
  
function plural(n) {
    return !(n===1)
    // ...
  }

  
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return Array.from(n.toString().split('').reverse().map(Number))
    
    //code here
  }

  
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let ourDistance = mpg * fuelLeft
    if(ourDistance<distanceToPump){
      return false
    }else return true
    
    // TODO
  };
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// 
let stringToNumber = function(str){
  return parseInt(str)
  // put your code here
  return null;
}

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

let min = function(list){
    
    return Math.min(...list)
}

let max = function(list){
    
    return Math.max(...list);
}

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(" ")
 };

 
//  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    // Code?
    return -Math.abs(num);
  }

//   Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt
function add(a,b){
    return a +b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a - b
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
    let classAvg = classPoints.reduce((a, b) => a + b) / classPoints.length
    if (yourPoints > classAvg){
      return true
    }else{
      return false
    }
    
  }
  
//   Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
function usdcny(usd) {
    let cny = usd * 6.75
    return`${cny.toFixed(2)} Chinese Yuan`
  }
  
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    return list.reverse()
    
  }



// Given an array of integers, return a new array with each value doubled.

function maps(x){
    return x.map(y=>y*2)
  
  }
  
// Write a function to split a string and convert it into an array of words.

function stringToArray(string){

  // code code code
  return string.trim().split(' ')
  

}

  
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      return (parseInt(inputString)) 
    }
    








