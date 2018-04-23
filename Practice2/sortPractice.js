'use strict'

function sort(input) {
  var swapped = true;
  var temp, j =0;
  
  while(swapped){
    swapped = false;
    j++;
    for(let i = 0; i < input.length-j; i++){
      if(input[i] > input[i+1]){
        //swap without using additional variabe
        input[i] = (input[i] + input[i+1]);
        input[i+1] = input[i] - input[i+1];
        input[i] = input[i] - input[i+1];
        swapped = true;
      }
    }
  }
  return input;

  // return input.sort((a,b) => a-b); // shortcut
}
module.exports = sort

/* //test
var arr = new Array(4124, 214,215,5315,36,242,52,0,-13,33,-76,-346,-3151,35,67,46,246,7675,-436,-23);
sort(arr); 
console.log(arr);
*/