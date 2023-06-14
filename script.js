// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let S=str.split(" ").join("");
let s=str.split(" ").join("").split("").reverse().join("");
	if(S==s){
		return true;
	}
	else{
		return false;
	}
}
module.exports = palindrome
