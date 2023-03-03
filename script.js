// Functions for math 
let add = (a,b) => a+b
let substract = (a,b) => a-b
let multiply = (a,b) => a*b
let divide = (a,b) => a/b

let operate = (a,b,operator) =>{
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

const numbersId = ["#zero","#one","#two","#three","#four","#five","#six","#seven","#eight","#nine"]
let numbers = []
const screen = document.querySelector("#screen")

for(let i=0; i<=10; i++){
    numbers[i] = document.querySelector(numbersId[i]);
    numbers[i].addEventListener('click', () => {
        a = i
        screen.innerHTML = a
    })
}
