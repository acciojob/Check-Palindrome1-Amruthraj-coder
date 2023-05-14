// complete the given function

function palindrome(str){
let arr=str.split("").toLowercase();
let message = true;
arr = arr.filter(function(e){
	return e!=" ";
})
	str=arr.join("");
	let i=0,j=str.length-1;
  while(i<=j){
   if(str.charAt(i)!=str.charAt(j)){
	   message = false;
   }
	  j--;
	  i++;
  }
	return message;
}
module.exports = palindrome
