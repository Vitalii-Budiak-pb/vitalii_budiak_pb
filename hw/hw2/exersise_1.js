function cube(x) {
    if (Number.isInteger(x)){
        result = x * x * x
        return result;
    } else {
        console.log('Error: parameter type is not a Number')
    }

}

console.log(cube(2))