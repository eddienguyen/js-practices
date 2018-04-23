'use strict'


 /*  function generate(testLengthArray){
    return Array.from({length : testLengthArray.length})
      .map(item => ({
        input: Array.from({length: item}).map(item => []),
        target: 0,
        output: -1
      })
    ); // Remove this line and change to your own algorithm
  }*/
 

 function generate(testLengthArray){
  let outputArray =  testLengthArray.map(fatherArrayItem => ({    //each fatherArrayItem = fatherArr
    value: fatherArrayItem,
    input: Array.from({length: fatherArrayItem})                  //input: fatherArr
      .map(childArrayItem => randomInt(min,max) )                 //each item in childArray
      .sort( (a,b) => a-b ),                
    target: 0,
    output: -1
  })
  );

  //set target
  let outputArray1 = outputArray.map(item => ({
    input : item.input,
    target : item.input[randomInt(0,item.input.length)],
    output: item.output
  }) 
    
  );

  //find output
  let outputArray2 = outputArray1.map(item => ({
    input : item.input,
    target : item.target,
    output: item.input.indexOf(item.target)
  }) 
    
  );

  return outputArray2;                                       //return grandFatherArr
}
  


module.exports = generate

//test:

const test = [95,25,46,24,36,15,63,31,87,35,75,36,57,35,75];
//create random number
const min = -10000, max = 10000;
function randomInt(min, max){
  return Math.floor(Math.random()* (max - min + 1) + min);
}

//Create an array of random numbers
/*
var generateSmallArray = (testArray) => {
  return Array.from({length: testArray.length}).map(item => randomInt(min,max)); 
}
*/

//grandFatherArray
function generateGrandFatherArray(testArray){
                                                      
  let outputArray =  testArray.map(fatherArrayItem => ({    //each fatherArrayItem = fatherArr
    value: fatherArrayItem,
    input: Array.from({length: fatherArrayItem})            //input: fatherArr
      .map(childArrayItem => randomInt(min,max) )           //each item in childArray
      .sort((a,b) => a-b),          
    target: 0,
    output: -1
  })
  );
  
  //set target
  let outputArray1 = outputArray.map(item => ({
    input : item.input,
    target : item.input[randomInt(0,item.input.length)],
    output: item.output
  }) 
    
  );

  //find output
  let outputArray2 = outputArray1.map(item => ({
    input : item.input,
    target : item.target,
    output: item.input.indexOf(item.target)
  }) 
    
  );
  return outputArray2;                                       //return grandFatherArr
}

// console.log(generateGrandFatherArray(test));

//sort with bubblesort
// function sort(input) {
//   var swapped = true;
//   var temp, j =0;
  
//   while(swapped){
//     swapped = false;
//     j++;
//     for(let i = 0; i < input.length-j; i++){
//       if(input[i] > input[i+1]){
//         //swap without using additional variabe
//         input[i] = (input[i] + input[i+1]);
//         input[i+1] = input[i] - input[i+1];
//         input[i] = input[i] - input[i+1];
//         swapped = true;
//       }
//     }
//   }
//   return input;

//   // return input.sort((a,b) => a-b); // shortcut
// }