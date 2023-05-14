// complete the given function

function palindrome(str){
let arr=str.split("");
let isapalindrome = true;
arr = arr.filter(function(e){
	return e!=" ";
})
	str=arr.join("");
	let i=0,j=str.length-1;
  while(i<=j){
   if(str.charAt(i)!=str.charAt(j)){
	   isapalindrome = false;
   }
  }
	return isapalindrome;
}
module.exports = palindrome
