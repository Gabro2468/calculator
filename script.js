// Functions for math 
const add = (a,b) => a+b
const substract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b

let operate = (a,b,operator) =>{
    switch(true){
        case operator === "+":
            return add(a,b)
        case operator === "-":
            return substract(a,b)
        case operator === "*":
            return multiply(a,b)
        case operator === "/":
            if (b == 0){
                return "Error"
            }
            else{
                return divide(a,b)
            }
        default:
            console.log("Enter a proper one")
    }
}

// Adding event listeners for numbers
const numbersId = ["#zero","#one","#two","#three","#four","#five","#six","#seven","#eight","#nine"]
let numbers = []
const screen = document.querySelector("#screen")
let numberA = ""
let numberB = ""

for(let i = 0; i < 10; i++){
    numbers[i] = document.querySelector(numbersId[i]);
    numbers[i].addEventListener('click', () => {
        if (operator === ""){
            numberA += i
            screen.innerHTML = numberA
        }
        else{
            numberB += i
            screen.innerHTML = numberB
        }
    })
}

// Adding event listeners for math methods 
const divideOperator = document.querySelector("#divide")
const multiplyOperator = document.querySelector("#multiply")
const substractOperator = document.querySelector("#substract")
const addOperator = document.querySelector("#add")
const equalOperator = document.querySelector("#equal")
let operator = ""
let score = 0
 
divideOperator.addEventListener("click", () => {
    operator = "/";
    divideOperator.className = "button-right-active";
    multiplyOperator.className = "button-right" 
    substractOperator.className = "button-right"
    addOperator.className = "button-right"
})

multiplyOperator.addEventListener("click", () => {
    operator = "*";
    multiplyOperator.className = "button-right-active";
    divideOperator.className = "button-right" 
    substractOperator.className = "button-right"
    addOperator.className = "button-right"
})

substractOperator.addEventListener("click", () => {
    operator = "-";
    substractOperator.className = "button-right-active";
    divideOperator.className = "button-right" 
    multiplyOperator.className = "button-right"
    addOperator.className = "button-right"
})

addOperator.addEventListener("click", () => {
    operator = "+";
    addOperator.className = "button-right-active";
    divideOperator.className = "button-right" 
    substractOperator.className = "button-right"
    multiplyOperator.className = "button-right"
})

equalOperator.addEventListener("click", () => {
    screen.innerHTML = operate(parseInt(numberA),parseInt(numberB),operator)
    score = operate(parseInt(numberA),parseInt(numberB),operator)
    numberA = score
    numberB = ""
    addOperator.className = "button-right";
    substractOperator.className = "button-right"
    multiplyOperator.className = "button-right"
    divideOperator.className = "button-right" 
})

// Adding event listeners for AC and pos/neg
const clear = document.querySelector("#AC")
const opposite = document.querySelector("#opposite")

clear.addEventListener("click", () => {
    operator = ""
    score = 0
    numberA = ""
    numberB = ""
    screen.innerHTML = "0"
    addOperator.className = "button-right";
    substractOperator.className = "button-right"
    multiplyOperator.className = "button-right"
    divideOperator.className = "button-right" 
})

opposite.addEventListener("click", () => {
    if (operator === ""){
        if(numberA[0] === "-"){
            numberA = numberA.slice(1,)
            screen.innerHTML = numberA
        }
        else{
            numberA = "-" + numberA 
            screen.innerHTML = numberA
        }
    }
    else{
        if(numberB[0] === "-"){
            numberB = numberB.slice(1,)
            screen.innerHTML = numberB
        }
        else{
            numberB += "-" + numberB
            screen.innerHTML = numberB
        }
    }
})
