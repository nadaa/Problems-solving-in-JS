
// sort an array recursively

var findMax=function(arr){
	var max=arr[0];
	var index=0;
	for(var i=1;i<arr.length;i++){
		if (arr[i]>max){
			max=arr[i];
			index=i;
		}
	}
	return [max,index];
}

// var newArr=[];
// //var max,index;
// var m;
// function sort(arr){
// 	if(arr.length===0){
// 		return newArr;
// 	}

// 	else{

//     m=findMax(arr)
   
//     newArr.push(m[0])
//     //console.log(arr.splice(m[1],1))
//     arr.splice(m[1],1)
//     return sort(arr);

// 	}
// }


//var newArr=[];
//var max,index;
function sort(arr){
	var newArr=[];
	var m=[];

	if(arr.length===0){
		return arr.unshift(m[0]);
	}

	else{

    m=findMax(arr)
   
   // newArr.push(m[0])
    //console.log(arr.splice(m[1],1))
    arr.splice(m[1],1)
    return sort(arr);

	}
}


