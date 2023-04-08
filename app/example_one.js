function findLongestPrefix(strs) {
  var firstText = strs[0]; 

  for (var i = 0; i < firstText.length; i++) {
      for(var j =0; j<strs.length; j++){    
        if(firstText[i] !== strs[j][i]){
            firstText =firstText.substring(0,i);
            break;
        }  
      }   
  }
  return firstText;

}

console.log("result ", findLongestPrefix(["flower", "flow", "flight"]));
console.log("result ", findLongestPrefix(["dog","racecar","car"]));
