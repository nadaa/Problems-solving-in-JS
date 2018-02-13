
var i=-1;
/**
 * [reverseStr description]
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