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

//create random number
const min = -10000, max = 10000;
function randomInt(min, max){
  return Math.floor(Math.random()* (max - min + 1) + min);
}

 function generate(testLengthArray){
   //generate a basic Array with desire input:
  let arrayWithInput =  testLengthArray.map(item => ({    
    input: Array.from({length: item})                  
      .map(childArrayItem => randomInt(min,max) )                 
      .sort( (a,b) => a-b ),                
    target: 0,
    output: -1
  })
  );

  //set target
  let outputArrayWithTarget = arrayWithInput.map(item => ({
    input : item.input,
    target : item.input[randomInt(0,item.input.length)],
    output: item.output
  }) 
    
  );

  //find output
  let completedArray = outputArrayWithTarget.map(item => ({
    input : item.input,
    target : item.target,
    output: item.input.indexOf(item.target)
  }) 
    
  );

  function notFoundArrayLike(givenArray, givenArrayIndex){

    var target = randomInt(min, max);

    while(givenArray[givenArrayIndex].input.every( (currentValue) => {
      currentValue == target
    } )) {
      target = randomInt(min, max);
    }

    givenArray[givenArrayIndex].target = target;
    givenArray[givenArrayIndex].output = -1;
  }

  
  function relocationTarget(givenArray, givenArrayIndex, targetIndex){
    givenArray[givenArrayIndex].target = givenArray[givenArrayIndex].input[targetIndex];
    givenArray[givenArrayIndex].output = targetIndex;

    if(targetIndex === "middle"){
      let middleIndex = Math.floor(givenArray[givenArrayIndex].input.length / 2);
      givenArray[givenArrayIndex].target = givenArray[givenArrayIndex].input[middleIndex];
      givenArray[givenArrayIndex].output = middleIndex;
    }
  }
  
  if(testLengthArray.length >= 4){
    //Special case: Not found: input doesn'y contain target
    notFoundArrayLike(completedArray, 0);

    //Special case: First index: `target` is at index `0`.
    relocationTarget(completedArray, 1, 0);

    //Special case: Last index: `target` is at index `input.length-1`.
    relocationTarget(completedArray, 2, completedArray[2].input.length-1);

    //Special case: Middle index: `target` is NOT at index `0` or `input.length-1`.
    relocationTarget(completedArray, 3, "middle");
  }
  

  return completedArray;                                      

}
  


module.exports = generate



//TEST-ONLY:
/*
const test = [15,25,46,24,36,15,63,31,87,35,75,36,57,35,75];

//grandFatherArray
function generateGrandFatherArray(testArray){
                                                      
  let setInputArray =  testArray.map(fatherArrayItem => ({    //each fatherArrayItem = fatherArr
    value: fatherArrayItem,
    input: Array.from({length: fatherArrayItem})            //input: fatherArr
      .map(childArrayItem => randomInt(min,max) )           //each item in childArray
      .sort((a,b) => a-b),          
    target: 0,
    output: -1
  })
  );
  
  //set target
  let setTargetArray = setInputArray.map(item => ({
    input : item.input,
    target : item.input[randomInt(0,item.input.length)],
    output: item.output
  }) 
    
  );

  //find output
  let setOutputArray = setTargetArray.map(item => ({
    input : item.input,
    target : item.target,
    output: item.input.indexOf(item.target)
  }) 
    
  );

  return setOutputArray;                                       //return grandFatherArr
}

// console.log(generateGrandFatherArray(test));
*/