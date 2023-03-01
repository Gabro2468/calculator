// Functions for math 
let add = (a,b) => a+b
let substract = (a,b) => a-b
let multiply = (a,b) => a*b
let divide = (a,b) => a/b

let operate = (a,b,operator) =>{
    operator = prompt("Which operator would you like to use ?")
    switch(true){
        case operator === "+":
            return add(a,b)
        case operator === "-":
            return substract(a,b)
        case operator === "*":
            return multiply(a,b)
        case operator === "/":
            return divide(a,b)
        default:
            console.log("Enter a proper one")
    }
}
