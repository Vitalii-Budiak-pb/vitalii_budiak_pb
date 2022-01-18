var arr = [1,2,3,4,8,10];
var summ = 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        if(arr[i] > 3){
            summ = summ + arr[i];
        }
    }
}

console.log(summ);