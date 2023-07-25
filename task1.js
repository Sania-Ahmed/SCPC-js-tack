const reverString = (str) => {
    console.log(str.length)
    let reversed = [] ;
for (let i= str.length - 1; i >= 0  ; i--) {
    const element = str[i];
    reversed.push(element)
}
return reversed.join('')
}
console.log(reverString("hello world"))