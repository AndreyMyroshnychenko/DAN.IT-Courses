let enterFirst=+prompt("Enter first");
while(isNaN(enterFirst)||enterFirst===0){
    enterFirst=+prompt("Enter first again...")
}

let enterSecond=+prompt("Enter second");
while(isNaN(enterSecond)||enterSecond===0){
    enterSecond=+prompt("Enter second again...")
}

let enterOperation=prompt("Enter operation: +, -, *, /");
while(enterOperation!=="+"&&enterOperation!=="-"&&enterOperation!=="*"&&enterOperation!=="/"){
    enterOperation=prompt("Enter operation again... +, -, *, /");
}




function calculation(firstNumber, secondNumber, operation){

    switch(operation){
        case "+":
            return firstNumber + secondNumber;
        
        case "-" :
            return firstNumber - secondNumber;

        case "*":
            return firstNumber * secondNumber;

        case "/":
            return firstNumber / secondNumber;

        default:
            return false;
            
    }


}




let finale=calculation(enterFirst, enterSecond, enterOperation);
console.log(finale)
