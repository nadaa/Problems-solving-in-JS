

// i is an index that starts from the end of the string, we keep updating this index within the function 
var i=-1;
/**
 * [reverseStr function to reverse a string recursively]
 * @param  {[string]} str [a string prarameter]
 * @return {[string]}     [a string in a reversed order]
 */
function reverseStr(str){
if (str===''){
return '';
}

else{
return str[str.length-1]+reverseStr(str.slice(str,i))
i--;}


}

// another way
function rev (str){
	if (str.length===0 ){
	return ''
	}

	return str[str.length-1]+rev(str.slice(0,str.length-1))


}