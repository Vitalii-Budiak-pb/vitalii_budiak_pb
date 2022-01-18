var arr = [1,2,3,-5,-2,1,-4];
var summ = 0;

for(i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        summ = summ + arr[i];
    }
}

console.log(summ)