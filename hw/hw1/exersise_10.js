var arr = [6,5,4,3,2,1];
var count = arr.length - 1;

for (var i = 0; i < count; i++)
    for (var j = 0; j < count - i; j++)
        if (arr[j] > arr[j + 1]) {
            var max = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = max;
        }

console.log(arr)
