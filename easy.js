let num = [1, 2, 3, 4, 5, 6,]

function average(array){
    let total = array.reduce((x,y) => x + y, 0);
    return total / array.length;
}
console.log(average(num))