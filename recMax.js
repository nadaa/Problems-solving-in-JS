// write a program to find the max number in array recursively
/**
 * [compare description]
 * @param  {[type]} x [the first number]
 * @param  {[type]} y [the second number]
 * @return {[type]}   [the largest number between x,y]
 */
function compare(x,y){

	if (x>y){ return x;}
	return y;
}

function Max(arr){
	if (arr.length===2){
        return compare(arr[0],arr[1])
	}

var x=arr.shift();
return compare(x,revMax(arr))
	}





/*

to find the max of array recursively, we build a compare function
which helps to get the max of two values.

In the recursion, we will take the first element of the given array (using shift)
we call the function recursively with the remaining elements 
The array is reduced one element in each recursive call 
- The base case occurss when the current array has two values
- The revMax function returns the max of these two numbers
- Then we compare the first element of the current function call to the max from 
the previous function return.
ex: arr=[1,3,6,2]
1) call revMax([1,3,6,2])
2) x=arr.shift() =1
3) compare(1,revMax([3,6,2]))
4)call revMax([3,6,2])
5)x=arr.shift()=3
6) compare(3,revMax([6,2]))
7) arr.length=2, so return compare(6,2), return 6
8)retur to the previous compare(3,6) =6
9) return to the previous compare(1,6)=6
10) return to the first call revMax the value 6.



 */

x=[1,2,3,4,8]






















