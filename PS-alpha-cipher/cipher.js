
// added substitution  like added +1 to all values if it is string then convert them to charCode and added 1
function encode(str) {
  
  var arr=str.split("");
 
  var arr1=[];
  var arr2=[];
  for (i=0;i<arr.length;i++){    
   
   var item=arr[i];
   arr1.push(item.charCodeAt()+1);
  }
 for (j=0;j<arr1.length;j++){
 
   var item2=arr1[j];
   arr2.push(String.fromCharCode(item2));
 
 }
 var test=arr2.join("");
  return test;
}
// substracted 1 from all the characters and returns original string 
function decode(encoded) {
  var arr=encoded.split("");
 
  var arr1=[];
  var arr2=[];
  for (i=0;i<arr.length;i++){    
   
   var item=arr[i];
   arr1.push(item.charCodeAt()-1);
  }
 for (j=0;j<arr1.length;j++){
 
   var item2=arr1[j];
   arr2.push(String.fromCharCode(item2));
 
 }
 var test=arr2.join("");
  return test;
}

console.log(encode(abc)); // bcd
console.log(decode(bcd));// abc
