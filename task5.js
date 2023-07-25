const calculator = (num1 , num2 , operator ) => {
    switch (operator) {
        case "+":
            console.log(num1 + num2)   
            break;
        case "-":
            console.log(num1-num2)
            break;
        case "*" :
            console.log(num1*num2)
            break ;
        case "/" :
            console.log(num1/num2) 
            break;   
        default:
            console.log("provide operator")
            break;
    }
    return 
}

console.log(calculator(2,3,"/"))