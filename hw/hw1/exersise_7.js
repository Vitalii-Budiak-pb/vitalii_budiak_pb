var arr = [1,2,3,4];
var summ = 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        summ = summ + arr[i];
    }
}

console.log(summ);