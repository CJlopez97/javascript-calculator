//Declaring an empty history array to store results as Objects
const history = [];

//This function adds results to the history array
function addToHistory(num1, num2, operator, result){
    const calculation = {
        Operands: [num1, num2],
        Operator: operator,
        Result: result
    }
    history.push(calculation)
}
//This is the adding function
function addNumbers(num1, num2){
   
    let result = num1 + num2
    addToHistory(num1, num2, "+", result)
    return result
}
//This is the substract function
function substractNumbers(num1, num2){
 
    let result = num1 - num2
    addToHistory(num1, num2, "-", result)
    return result
}
//This is the multiplication function
function multiplyNumbers(num1, num2){

   let result = num1 * num2
   addToHistory(num1, num2, "*", result)
   return result
}
//This is the division function
function divideNumbers(num1, num2){
    //Checking to see that there's no division by 0
    if(num2 === 0){
        return "You cannot divide by zero"
    } 

   let result = num1 / num2
   addToHistory(num1, num2, "/", result)
   return result
}
//This function displays the history
function showHistory(){
    //Checks to see if the array is empty
    if(history.length === 0){
        console.log("No history to be shown")
        return  
    }
    //Loops through array and outputs history
    console.log("--- Calculator History ---")
    for(let i = 0; i < history.length; i++){
        const entry = history[i]
        console.log(`${i + 1}: ${entry.Operands[0]} ${entry.Operator} ${entry.Operands[1]} = ${entry.Result}`)
    }
}

/* 
--- Examples ---

divideNumbers(25, 5)
substractNumbers(26, 13)
addNumbers(29, 34)
multiplyNumbers(15, 6)
*/

// Perform calculations below this line


// Make sure any calculations are run above this last line
showHistory()