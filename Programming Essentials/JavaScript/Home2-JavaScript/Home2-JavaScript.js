let enteredNumber=prompt("enter the number");

while (enteredNumber === 0 || isNaN(enteredNumber) || !Number.isInteger(enteredNumber)){

    enteredNumber = +prompt("One more time...")

   }
   
    for(let i = 0; i <= enteredNumber; i++){

        if (i % 5 === 0 && i !== 0){

        console.log(i);

        }else if (enteredNumber < 5)
        {
            alert("Sorry, no numbers")
            break;
        }
    }
   
   
   
    let numberStart = +prompt("Number")
    let numberEnd = +prompt("Number 2")

    for (let i = numberStart; i <= numberEnd; i++) {

         for (let j = 2; j < i; j++) {

            if (i % j === 0) {
              continue;
            }
         }
         console.log(i)
    }
   
   