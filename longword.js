// Write a program to find the longest word in a string recursively

/**
 * [compareWords find the maximum word length between two words]
 * @param  {[string]} w1 [the first word]
 * @param  {[string]} w2 [the second word]
 * @return {[string]}    [the output]
 */
function compareWords(w1,w2){
if (w1.length>w2.length){ return w1;}
return w2;


}

/**
 * [longestWord description]
 * @param  {[an array of words]} arr [description]
 * @return {[the longest word in the array]}     [description]
 */
function longestWord(arr){
if (arr.length===2) {return compareWords(arr[0],arr[1]);}

var x=arr.shift();
return compareWords(x,longestWord(arr));

}


function call(str){
	var arr=str.split(' ');
    return longestWord(arr);
}