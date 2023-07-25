const findTheValue = (arr, input) => {
    let output = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const element2 = arr[index + 1 ]; 
         if(element + element2 == input) {
            output.push(element,element2)
            break ;
         }
        
    }
    return output
}

console.log(findTheValue([1, 3, 6, 8, 11, 15], 9))