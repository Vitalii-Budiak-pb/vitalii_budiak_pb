var arr = [1,2,3,4,5,6];  // [6,5,4,3,2,1]
var arr1 = [];

for (var i = arr.length - 1 ; i >= 0; i--){
    arr1.push(arr[i])
}
console.log(arr1)