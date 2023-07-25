const sumOfPositiveNum = (arr) => {
    let total ;
    let newArr = [] ;
    for(num of arr){
        if(num >= 0 ) {
           newArr.push(num) ; 
           const sum = newArr.reduce((y, x ) => y + x , 0)
           total = sum ;
        }
    }
    return total
}

console.log(sumOfPositiveNum( [2, -5, 10, -3, 7] ))