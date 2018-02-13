

/**
 * [plaindrom check if a given string is a plaindrom]
  * @param  {[str]} str [a string to check]
 * @return {[boolean]}     [retrun true if the str is a plaindrom and false otherwise]
 */
function plaindrom(str){
if (str.length===1) {return true;}
else if(str.length===2)
	{
		return (str[0]===str[str.length-1]);}

return (str[0]===str[str.length-1]) && plaindrom(str.slice(1,length-1))

}