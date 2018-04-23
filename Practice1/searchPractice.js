'use strict'

function search(input, target) {
  let isFound = false;
  for(let i = 0; i < input.length; i++){
    if(input[i]==target){
      isFound = true;
      // console.log("found target at: "+ i);
      return(i);
    }
  }

  if(!isFound) return -1;

  // return  input.indexOf(target);  // Shortcut
}

module.exports = search
