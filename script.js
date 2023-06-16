// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let S=str.split(" ").join("");
let s=str.split(" ").join("").split("").reverse().join("");

	return s==S;
}
module.exports = palindrome
