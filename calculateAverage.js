// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    if(array.length<1){
      return 0
    }else{
      return array.reduce((acc,c)=>acc+c,0)/array.length
    }
    
  }